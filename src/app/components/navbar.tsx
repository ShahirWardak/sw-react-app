export default function Navbar() {
  return (
    <nav className='fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center whitespace-nowrap text-4xl font-semibold dark:text-white'>
            React App
          </span>
        </a>
        <div className='flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
          <a
            href='#'
            className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800'
          >
            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
              Account
            </span>
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
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
          id='navbar-sticky'
        >
          <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900'>
            <li>
              <a
                href='/dashboard'
                className='block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500'
                aria-current='page'
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href='/messenger'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Messenger
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Link 3
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Link 4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
