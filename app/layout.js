import { Anton, Bebas_Neue, Inter, Alex_Brush } from 'next/font/google';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-name',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
});

export const metadata = {
  title: 'Alex Fanning — Graphic Designer',
  description: 'Portfolio of Alex Fanning, specialising in packaging design, UI/UX, web design and branding.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${bebas.variable} ${inter.variable} ${alexBrush.variable}`}>
      <body>{children}</body>
    </html>
  );
}
