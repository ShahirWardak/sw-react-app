import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { routesType } from './types/routes.types';
import NavBar from './components/nav-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shahir React World',
  description: 'NextJS Project',
};

const pages: routesType[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={'mx-5 mt-20 lg:mx-auto lg:w-4/5 xl:w-3/5 ' + inter.className}
      >
        <NavBar routes={pages} />
        <div>{children}</div>
      </body>
    </html>
  );
}
