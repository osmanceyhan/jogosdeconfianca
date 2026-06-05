const FAQS = [
  {
    q: 'How does Vault Jackpot Zone choose which bonus drops to list?',
    a: 'Our editorial team monitors UK-licensed operator promotions weekly. We score each offer on headline value, wagering fairness, withdrawal speed and the operator’s standing with the UK Gambling Commission. Only the operators that clear our internal vault score appear on this page.',
  },
  {
    q: 'What does UKGC licensed actually mean?',
    a: 'Every operator we feature holds a current operating licence from the UK Gambling Commission. The UKGC sets minimum standards for player funds protection, fair game outcomes, advertising honesty and responsible gambling tools. You can verify any operator on the Commission’s public register.',
  },
  {
    q: 'Why do your "Open Vault" buttons redirect through a tracker URL?',
    a: 'We are an affiliate comparison site, not a gambling operator. When you click through, the link passes through a tracker so the operator can pay us a commission if you sign up. The redirect does not change your offer, the bonus value or the terms you see on the operator’s landing page.',
  },
  {
    q: 'Where do the welcome bonuses on this page come from?',
    a: 'The headline figures are quoted directly from each operator’s public promotion page at the time of our weekly refresh. We do not edit the bonus terms. If an operator changes a promo between refreshes, you will see the updated value on their site — always check the operator’s own T&Cs page before depositing.',
  },
  {
    q: 'What is wagering, and why does it matter?',
    a: 'Wagering (sometimes called playthrough) is the number of times you must stake your bonus before any winnings convert to withdrawable cash. A "35x bonus" rule on a £50 bonus means £1,750 of total stakes. Lower numbers, or wager-free spins, are friendlier — that is why we surface the wagering rule on every card.',
  },
  {
    q: 'I feel my gambling is becoming a problem. What should I do?',
    a: 'Stop now and reach out. GamCare runs a free 24/7 helpline on 0808 8020 133 and a live chat. You can also self-exclude from every UKGC-licensed site at once via GAMSTOP. BeGambleAware offers free counselling. We have no commercial relationship with any of these services — they exist to help.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="eyebrow mb-3">Common Questions</p>
        <h2 className="font-display text-3xl md:text-[34px] font-bold">Vault FAQ</h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-summary">
              <span>{item.q}</span>
              <span className="faq-toggle">+</span>
            </summary>
            <div className="faq-body">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
