import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stellaris Prime | Naves Espaciales de Lujo',
  description: 'Catálogo premium de naves espaciales para transporte interplanetario.',
  keywords: ['naves espaciales', 'lujo', 'interplanetario', 'futurista', 'sci-fi']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="starfield" />
        {children}
      </body>
    </html>
  );
}
