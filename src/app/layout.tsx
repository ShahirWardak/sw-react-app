import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { routesType } from './types/routes.types';

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
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Messenger',
    url: '/messenger',
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
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        {children}
        <Footer></Footer>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js'
          async
        ></script>
      </body>
    </html>
  );
}
