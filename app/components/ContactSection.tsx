'use client';

import Link from 'next/link';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { type FormEvent, useState } from 'react';
import { db } from '@/lib/firebase';

const Arrow = () => <span aria-hidden="true">↗</span>;

type Feedback = {
  type: 'success' | 'error';
  message: string;
};

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setFeedback(null);

    try {
      await addDoc(collection(db, 'leads'), {
        nome: String(formData.get('nome') ?? '').trim(),
        email: String(formData.get('email') ?? '').trim(),
        whatsapp: String(formData.get('whatsapp') ?? '').trim(),
        mensagem: String(formData.get('mensagem') ?? '').trim(),
        createdAt: serverTimestamp(),
      });

      form.reset();

      setFeedback({
        type: 'success',
        message:
          'Mensagem enviada com sucesso! Em breve entraremos em contato.',
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);

      setFeedback({
        type: 'error',
        message: 'Não foi possível enviar sua mensagem. Tente novamente.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="contact section-dark">
      <div className="contact-glow" />

      <div className="wrap contact-grid">
        <div>
          <span className="eyebrow light">
            <i /> VAMOS CONVERSAR
          </span>

          <h2>
            Sua empresa já existe.
            <br />
            Agora faça ela ser <em>percebida.</em>
          </h2>

          <p>
            Conte um pouco sobre seu projeto. Em breve, entraremos em contato
            para dar o próximo passo.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              name="nome"
              autoComplete="name"
              placeholder="Como podemos chamar você?"
              required
            />
          </label>

          <label>
            E-mail
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="voce@empresa.com"
              required
            />
          </label>

          <label>
            WhatsApp
            <input
              name="whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              required
            />
          </label>

          <label>
            Mensagem
            <textarea
              name="mensagem"
              rows={3}
              placeholder="Conte brevemente sobre o seu projeto"
            />
          </label>

          <button
            className="button button-light"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Criar meu projeto'} <Arrow />
          </button>

          <p
            style={{
              margin: '16px 0 0',
              color: '#8f96a6',
              fontSize: '10px',
              lineHeight: 1.7,
            }}
          >
            Ao enviar este formulário, você concorda com o tratamento dos seus
            dados pessoais para fins de contato comercial, conforme a nossa{' '}
            <Link
              href="/politica-de-privacidade"
              className="underline underline-offset-4 transition-colors hover:text-[#6033ff]"
            >
              Política de Privacidade
            </Link>{' '}
            e{' '}
            <Link
              href="/termos"
              className="underline underline-offset-4 transition-colors hover:text-[#6033ff]"
            >
              Termos de Uso
            </Link>
            .
          </p>

          {feedback ? (
            <p
              role="status"
              aria-live="polite"
              style={{
                margin: '18px 0 0',
                color:
                  feedback.type === 'success' ? '#8de8ae' : '#ff9aa8',
                lineHeight: 1.6,
              }}
            >
              {feedback.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
