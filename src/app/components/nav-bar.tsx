'use client';

import Link from 'next/link';
import { routesType } from '../types/routes.types';
import { usePathname } from 'next/navigation';

export default function NavBar(props: { routes: routesType[] }) {
  const pathname = usePathname();

  return (
    <>
      <div className='mb-10 flex gap-4 lg:gap-8'>
        {props.routes.map((page, i) => (
          <Link
            key={i}
            href={page.url}
            aria-current='page'
            className={
              'text-xl transition ease-in-out hover:text-discord-100 lg:text-lg ' +
              (pathname === page.url
                ? 'scale-110 underline decoration-2 underline-offset-8'
                : '')
            }
          >
            {page.title.toLowerCase()}
          </Link>
        ))}
      </div>
    </>
  );
}
