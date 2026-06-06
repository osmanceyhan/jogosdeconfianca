import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies — Jogos de Confiança',
  description: 'Informação sobre os cookies utilizados no website Jogos de Confiança e como geri-los no seu navegador.',
};

export default function Page() {
  return (
    <>
      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/" style={{ color: '#d97706', fontSize: 13, textDecoration: 'none' }}>&larr; Início</a>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#f2ebe0' }}>Jogos de <span style={{ color: '#d97706' }}>Confiança</span></span>
        </div>
      </header>

      <main style={{ maxWidth: 700, margin: '0 auto', padding: '40px 24px 60px', color: '#f2ebe0', lineHeight: 1.75, fontSize: 14 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Política de Cookies</h1>
        <p style={{ color: '#8a7e6e', fontSize: 12, marginBottom: 32 }}>Última revisão: junho de 2026</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>O Que São Cookies</h2>
        <p>Cookies são pequenos ficheiros de texto que os websites colocam no dispositivo do utilizador — computador, telemóvel ou tablet — durante a navegação. Estes ficheiros permitem que o site recorde determinadas informações sobre a sua visita, como preferências de idioma ou o facto de já ter aceitado o aviso de cookies, tornando as visitas subsequentes mais práticas e o serviço mais útil. Os cookies não acedem a outros dados armazenados no seu dispositivo nem executam programas.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Cookies Estritamente Necessários</h2>
        <p>Estes cookies são indispensáveis para que o website funcione corretamente e não podem ser desativados nos nossos sistemas. São geralmente configurados em resposta a ações do utilizador, tais como aceitar o aviso de cookies ou navegar entre páginas. Sem estes ficheiros, determinadas funcionalidades do site deixariam de operar. Estes cookies não armazenam informação pessoal identificável e não requerem consentimento prévio ao abrigo da legislação europeia.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Cookies de Análise e Desempenho</h2>
        <p>Utilizamos cookies analíticos para compreender de que forma os visitantes interagem com o jogosdeconfianca.live. Estes cookies recolhem informação de forma agregada e anónima — por exemplo, quantas páginas foram visitadas, quanto tempo durou a sessão ou qual a origem geográfica aproximada do tráfego. Os dados obtidos ajudam-nos a identificar áreas do site que podem ser melhoradas e a garantir que o conteúdo editorial responde às necessidades dos nossos leitores. Estes cookies são ativados apenas com o seu consentimento.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Cookies de Marketing e Afiliação</h2>
        <p>Quando o utilizador clica numa ligação de afiliado que redireciona para o website de um operador de casino, pode ser colocado um cookie de rastreamento que permite associar o registo do utilizador à nossa recomendação editorial. Estes cookies são utilizados para fins de atribuição comercial e não recolhem dados pessoais do utilizador para efeitos de publicidade segmentada. São definidos por terceiros e regem-se pelas políticas de privacidade dos respetivos operadores.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Cookies de Terceiros</h2>
        <p>Além dos cookies próprios, o nosso site pode carregar cookies provenientes de serviços externos, nomeadamente ferramentas de análise de tráfego. Estes cookies são controlados pelos respetivos fornecedores e estão sujeitos às suas próprias políticas de privacidade. Não temos controlo direto sobre a informação recolhida por estes cookies de terceiros, mas selecionamos apenas fornecedores que demonstrem compromisso com a proteção de dados em conformidade com o RGPD.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Como Gerir os Seus Cookies</h2>
        <p>A maioria dos navegadores permite controlar os cookies através das respetivas definições. O utilizador pode optar por bloquear todos os cookies, aceitar apenas cookies de primeira parte ou eliminar cookies já armazenados. Tenha em atenção que a desativação de cookies essenciais poderá afetar o funcionamento correto do website. Seguem-se ligações para as instruções de gestão de cookies nos navegadores mais comuns:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8, marginBottom: 8 }}>
          <li style={{ marginBottom: 4 }}>Google Chrome: Definições &gt; Privacidade e segurança &gt; Cookies</li>
          <li style={{ marginBottom: 4 }}>Mozilla Firefox: Definições &gt; Privacidade &amp; Segurança</li>
          <li style={{ marginBottom: 4 }}>Safari: Preferências &gt; Privacidade</li>
          <li style={{ marginBottom: 4 }}>Microsoft Edge: Definições &gt; Cookies e permissões do site</li>
        </ul>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Período de Conservação</h2>
        <p>Os cookies essenciais mantêm-se durante a sessão de navegação ou por um período máximo de doze meses. Os cookies analíticos são conservados por até vinte e seis meses, após o que expiram automaticamente. Os cookies de afiliação têm durações variáveis definidas pelos operadores parceiros, tipicamente entre trinta dias e seis meses.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Alterações e Contacto</h2>
        <p>Esta política de cookies pode ser atualizada periodicamente para refletir alterações na nossa utilização de cookies ou na legislação aplicável. Qualquer modificação relevante será publicada nesta página com a respetiva data de revisão. Para dúvidas ou esclarecimentos, contacte-nos através de geral@jogosdeconfianca.live.</p>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px', textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>
        &copy; 2026 Jogos de Confiança Unipessoal Lda.
      </footer>
    </>
  );
}
