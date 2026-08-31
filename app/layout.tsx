import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const fira = Fira_Code({ variable: '--font-fira', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alvenn — Sites estratégicos por assinatura',
  description: 'Sites sofisticados que unem design, estratégia e performance para transformar atenção em oportunidade.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={fira.variable}>{children}</body></html>;
}
