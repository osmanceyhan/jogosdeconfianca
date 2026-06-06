import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jogo Responsável — Jogos de Confiança',
  description: 'Informação sobre jogo responsável, sinais de alerta, autoexclusão e recursos de apoio disponíveis em Portugal.',
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
        <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Jogo Responsável</h1>
        <p style={{ color: '#8a7e6e', fontSize: 12, marginBottom: 32 }}>O jogo deve ser sempre uma forma de entretenimento, nunca uma necessidade.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>A Nossa Posição</h2>
        <p>No Jogos de Confiança acreditamos que a diversão proporcionada pelo jogo online só faz sentido quando praticada com moderação e consciência. O nosso papel enquanto portal de comparação inclui a responsabilidade de informar os nossos leitores sobre os riscos associados ao jogo e de promover ativamente uma cultura de jogo seguro. Todos os operadores que listamos possuem licença válida do SRIJ, o que assegura mecanismos obrigatórios de proteção do jogador.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Estabelecer Limites Pessoais</h2>
        <p>Antes de iniciar qualquer sessão de jogo, defina antecipadamente quanto tempo e dinheiro está disposto a investir — e respeite rigorosamente esses limites. Nunca jogue com dinheiro de que necessita para despesas essenciais como alimentação, renda ou contas. Todos os operadores licenciados pelo SRIJ disponibilizam ferramentas de autolimitação que permitem definir tetos de depósito diários, semanais ou mensais. Utilize-as desde o primeiro momento do seu registo.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Sinais de Alerta</h2>
        <p>É fundamental reconhecer quando o jogo deixa de ser uma atividade recreativa. Preste atenção aos seguintes comportamentos: jogar para tentar recuperar perdas anteriores; mentir a familiares ou amigos sobre o tempo ou dinheiro gasto; sentir ansiedade ou irritabilidade quando não joga; negligenciar responsabilidades profissionais, académicas ou familiares; pedir dinheiro emprestado para financiar sessões de jogo. Se reconhece algum destes padrões no seu comportamento, é importante procurar ajuda sem demora.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Linha SOS Jogo</h2>
        <p>Se sente que o jogo está a ter um impacto negativo na sua vida, pode ligar gratuitamente para a linha <strong style={{ color: '#d97706' }}>SOS Jogo: 800 202 175</strong>. Este serviço funciona como recurso de apoio para jogadores que enfrentam dificuldades, oferecendo aconselhamento confidencial. Não hesite em contactar — pedir ajuda é um ato de coragem, não de fraqueza.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Autoexclusão através do SRIJ</h2>
        <p>O Serviço de Regulação e Inspeção de Jogos (SRIJ) disponibiliza o Registo de Interditos, um mecanismo que permite a qualquer cidadão solicitar a sua exclusão voluntária de todos os operadores de jogo online licenciados em Portugal. A interdição pode ser temporária ou por tempo indeterminado, e aplica-se transversalmente a todas as plataformas reguladas. O pedido pode ser efetuado diretamente no portal do SRIJ em <a href="https://www.srij.turismodeportugal.pt/" style={{ color: '#d97706' }} target="_blank" rel="noopener">www.srij.turismodeportugal.pt</a>.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Ferramentas dos Operadores</h2>
        <p>Cada operador licenciado em Portugal é obrigado por lei a disponibilizar um conjunto de funcionalidades de proteção: limites de depósito e de perda, temporizadores de sessão que alertam o jogador após um determinado período, verificação de histórico de transações e opção de autoexclusão diretamente na plataforma. Encorajamos todos os utilizadores a explorarem estas ferramentas assim que criam conta e a ajustá-las conforme as suas circunstâncias pessoais.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Proteção de Menores</h2>
        <p>O jogo online é estritamente proibido a menores de 18 anos. Todos os operadores são obrigados a verificar a idade dos seus utilizadores antes de permitir depósitos ou apostas. Se partilha dispositivos com menores, certifique-se de que utiliza software de controlo parental e nunca deixe sessões de jogo abertas. Educar os mais jovens sobre os riscos do jogo é uma responsabilidade de todos os adultos.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Recursos Adicionais</h2>
        <p>Para além da linha SOS Jogo, existem outros recursos disponíveis para quem procura orientação ou apoio:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8, marginBottom: 8 }}>
          <li style={{ marginBottom: 6 }}><strong>SRIJ — Registo de Interditos:</strong> <a href="https://www.srij.turismodeportugal.pt/" style={{ color: '#d97706' }} target="_blank" rel="noopener">srij.turismodeportugal.pt</a></li>
          <li style={{ marginBottom: 6 }}><strong>GambleAware:</strong> <a href="https://www.gambleaware.org/" style={{ color: '#d97706' }} target="_blank" rel="noopener">gambleaware.org</a></li>
          <li style={{ marginBottom: 6 }}><strong>Jogadores Anónimos Portugal:</strong> grupos de apoio presenciais em várias cidades</li>
        </ul>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Compromisso do Jogos de Confiança</h2>
        <p>Comprometemo-nos a listar apenas operadores que cumpram os mais elevados padrões de proteção do jogador impostos pelo SRIJ. Se em algum momento identificarmos práticas contrárias ao jogo responsável por parte de um operador, retiraremos a sua listagem do nosso portal. A confiança que o nosso nome representa estende-se também à forma como queremos que os nossos leitores vivam a sua experiência de jogo: informados, conscientes e sempre no controlo.</p>

        <h2 style={{ fontSize: 18, fontWeight: 600, marginTop: 28, marginBottom: 10 }}>Contacte-nos</h2>
        <p>Se tiver dúvidas sobre jogo responsável ou quiser partilhar sugestões sobre como podemos melhorar as nossas iniciativas de sensibilização, escreva para geral@jogosdeconfianca.live.</p>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px', textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>
        &copy; 2026 Jogos de Confiança Unipessoal Lda.
      </footer>
    </>
  );
}
