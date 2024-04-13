import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { pageRoutes } from './types/routes.types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shahir React World',
  description: 'NextJS Project',
};

const pages: pageRoutes[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Messenger',
    url: '/messenger',
  },
  {
    title: 'Link 3',
    url: '#',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar routes={pages}></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
