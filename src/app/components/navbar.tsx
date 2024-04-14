import { pageRoutes } from '../types/routes.types';

export default function Navbar(props: { routes: pageRoutes[] }) {
  return (
    <nav className='fixed start-0 top-0 z-20 w-full shadow-lg dark:bg-discord-600'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-3'>
        <div className='flex w-full items-center justify-between space-x-3 md:order-2 md:w-auto md:justify-normal md:space-x-0 rtl:space-x-reverse'>
          <a
            href='#'
            className='rounded border border-gray-200 bg-transparent px-4 py-2 font-semibold hover:bg-discord-300 hover:text-white dark:text-white dark:hover:text-white'
          >
            Account
          </a>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
          id='navbar-sticky'
        >
          <ul className='mt-4 flex flex-col rounded-lg border-0 border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border md:border-0 md:p-0 rtl:space-x-reverse'>
            {props.routes.map((page, i) => (
              <a
                key={i}
                href={page.url}
                className='block rounded px-3 py-2 md:p-0 md:hover:bg-transparent md:hover:text-stone-300 dark:border-gray-700 dark:text-white dark:hover:bg-discord-300 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-stone-100'
                aria-current='page'
              >
                <li className='rounded p-3 md:dark:hover:bg-discord-300'>
                  {page.title}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
