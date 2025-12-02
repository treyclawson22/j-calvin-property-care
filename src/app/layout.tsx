import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'J Calvin Property Care Plans | Premium Home Exterior Maintenance',
  description: 'Reclaim your weekends with premium monthly maintenance for your home\'s exterior and outdoor living spaces. Serving North Houston for 32+ years.',
  keywords: 'property care, home maintenance, exterior cleaning, lawn care, Tomball, Klein, Spring, The Woodlands, Houston',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
