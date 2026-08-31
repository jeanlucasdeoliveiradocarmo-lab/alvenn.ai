import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteFooter from '@/app/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Política de Privacidade e Proteção de Dados',
  description:
    'Conheça as práticas da Alvenn.ai para coleta, uso, armazenamento e proteção de dados pessoais em conformidade com a LGPD.',
  alternates: {
    canonical: 'https://alvenn.ai/politica-de-privacidade',
  },
};

const sectionStyle = {
  marginTop: '52px',
} as const;

const headingStyle = {
  margin: '0 0 18px',
  color: '#f8f9fc',
  fontSize: 'clamp(24px, 3vw, 34px)',
  fontWeight: 500,
  lineHeight: 1.2,
} as const;

const paragraphStyle = {
  margin: '0 0 16px',
  color: '#b6bece',
  fontSize: '14px',
  lineHeight: 1.85,
} as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="island">
        <Link
          href="/"
          className="brand"
          aria-label="Alvenn.ai — início"
        >
          <Image
            src="/alvenn-logo.png"
            width={34}
            height={34}
            alt=""
            priority
          />
          <span>alvenn.ai</span>
        </Link>

        <Link className="nav-cta" href="/">
          Voltar ao início <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <main
        className="section-dark"
        style={{
          minHeight: '100svh',
          padding: '150px 0 120px',
          background:
            'radial-gradient(circle at 15% 12%, rgba(23, 105, 255, 0.24), transparent 34%), #05070b',
        }}
      >
        <article className="wrap" style={{ maxWidth: '900px' }}>
          <span className="eyebrow light">
            <i /> PRIVACIDADE E LGPD
          </span>

          <h1
            style={{
              margin: '34px 0 28px',
              fontSize: 'clamp(48px, 7vw, 88px)',
              fontWeight: 500,
              lineHeight: 0.96,
            }}
          >
            Política de Privacidade e <em>Proteção de Dados.</em>
          </h1>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: '700px',
              fontSize: '16px',
            }}
          >
            POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS — ALVENN.AI
          </p>

          <p
            style={{
              ...paragraphStyle,
              color: '#737b8c',
              fontSize: '11px',
            }}
          >
            Última atualização: 31 de agosto de 2026.
          </p>

          <section style={sectionStyle}>
            <h2 style={headingStyle}>1. Informações Gerais</h2>

            <p style={paragraphStyle}>
              A Alvenn.ai está comprometida com a privacidade, a segurança e a
              proteção dos dados pessoais tratados em suas atividades. Esta
              política descreve como coletamos, utilizamos, armazenamos e
              protegemos informações pessoais, em conformidade com a Lei Geral
              de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={headingStyle}>2. Dados Coletados e Finalidade</h2>

            <p style={paragraphStyle}>
              Coletamos somente os dados necessários para responder às
              solicitações enviadas por meio do formulário de contato:
            </p>

            <ul
              style={{
                margin: '22px 0 0',
                paddingLeft: '22px',
                color: '#b6bece',
                fontSize: '14px',
                lineHeight: 1.85,
              }}
            >
              <li>
                <strong style={{ color: '#f8f9fc' }}>
                  Nome completo:
                </strong>{' '}
                para identificação e tratamento personalizado.
              </li>

              <li>
                <strong style={{ color: '#f8f9fc' }}>
                  E-mail e WhatsApp:
                </strong>{' '}
                para resposta às solicitações comerciais e envio de propostas.
              </li>

              <li>
                <strong style={{ color: '#f8f9fc' }}>Mensagem:</strong> para
                compreensão do escopo do projeto solicitado.
              </li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={headingStyle}>3. Armazenamento e Segurança</h2>

            <p style={paragraphStyle}>
              Os dados são armazenados em infraestrutura de nuvem segura,
              incluindo serviços do Google Cloud, Firebase e Vercel, com uso de
              criptografia, controles de acesso e medidas técnicas e
              administrativas destinadas à proteção contra acessos não
              autorizados, perda, alteração ou divulgação indevida.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={headingStyle}>4. Compartilhamento de Dados</h2>

            <p style={paragraphStyle}>
              A Alvenn.ai não comercializa dados pessoais nem os compartilha
              com terceiros para fins publicitários. As informações são
              utilizadas exclusivamente para a gestão do relacionamento
              comercial e poderão ser processadas pelos provedores de
              infraestrutura e ferramentas de CRM estritamente necessários à
              operação, observadas as obrigações de segurança e
              confidencialidade aplicáveis.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={headingStyle}>5. Uso de Cookies</h2>

            <p style={paragraphStyle}>
              O site poderá utilizar as seguintes categorias de cookies e
              tecnologias semelhantes:
            </p>

            <ul
              style={{
                margin: '22px 0 0',
                paddingLeft: '22px',
                color: '#b6bece',
                fontSize: '14px',
                lineHeight: 1.85,
              }}
            >
              <li>
                <strong style={{ color: '#f8f9fc' }}>
                  Cookies essenciais:
                </strong>{' '}
                necessários ao funcionamento da navegação e dos componentes
                visuais do site.
              </li>

              <li>
                <strong style={{ color: '#f8f9fc' }}>
                  Cookies analíticos — Google Analytics:
                </strong>{' '}
                utilizados para mensurar o tráfego e compreender o uso do site
                de forma agregada.
              </li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={headingStyle}>6. Direitos do Titular dos Dados</h2>

            <p style={paragraphStyle}>
              O titular pode solicitar confirmação da existência de tratamento,
              acesso aos dados, correção de informações incompletas ou
              desatualizadas e, quando aplicável, bloqueio, anonimização ou
              exclusão definitiva dos dados pessoais.
            </p>

            <p style={paragraphStyle}>
              As solicitações devem ser enviadas para{' '}
              <a
                href="mailto:contato@alvenn.ai"
                style={{
                  color: '#78aeff',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                contato@alvenn.ai
              </a>
              . Poderemos solicitar informações adicionais para confirmar a
              identidade do requerente e proteger os dados contra acesso
              indevido.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={headingStyle}>7. Atualizações desta Política</h2>

            <p style={paragraphStyle}>
              Esta política poderá ser atualizada para refletir alterações
              legais, regulatórias, técnicas ou operacionais. A versão vigente
              estará sempre disponível nesta página com a respectiva data de
              atualização.
            </p>
          </section>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}