import Image from 'next/image';
import Link from 'next/link';

const INSTAGRAM_URL = 'https://www.instagram.com/alvenn.ai/';
const WHATSAPP_URL = 'https://w.app/n6q9wu';
const CONTACT_EMAIL = 'contato@alvenn.ai';

export default function SiteFooter() {
  return (
    <>
      <footer>
        <div className="wrap footer-top">
          <div>
            <Link
              href="/"
              className="footer-brand"
              aria-label="Alvenn.ai — início"
            >
              <Image
                src="/alvenn-logo.png"
                width={48}
                height={48}
                alt="Logo da Alvenn"
              />
              <span>alvenn.ai</span>
            </Link>

            <p>
              Sites que unem design,
              <br />
              estratégia e experiência.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <small>CONTATO</small>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>

              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>

            <div>
              <small>LEGAL</small>

              <Link href="/politica-de-privacidade">
                Política de Privacidade
              </Link>

              <Link href="/termos">Termos de Uso</Link>
            </div>
          </div>
        </div>

        <div className="wrap footer-bottom">
          <span>© 2026 Alvenn. Todos os direitos reservados.</span>
          <span>Feito com intenção no Brasil.</span>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        className="whatsapp"
        aria-label="Atendimento via WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span aria-hidden="true">◔</span>
        <b>WhatsApp</b>
      </a>
    </>
  );
}
