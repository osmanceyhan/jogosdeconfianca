'use client';

const ITEMS = [
  { q: 'Os operadores listados são legais?', a: 'Sim. Todos os operadores possuem licença SRIJ ativa, verificada no registo público antes de listar.' },
  { q: 'Como são selecionadas as ofertas?', a: 'Testamos pessoalmente cada operador: depósito, jogo e levantamento. Apenas os que pagam em 24h com termos claros ficam.' },
  { q: 'Onde posso pedir ajuda?', a: 'Contacte o SOS Jogo: 800 202 175 (gratuito, 24h) ou visite jogadoresseguros.pt.' },
];

export default function Perguntas() {
  return (
    <section className="jc-perguntas">
      <h2 className="jc-perguntas-title">Perguntas</h2>
      {ITEMS.map((item, i) => (
        <details key={i} className="jc-perguntas-item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </section>
  );
}
