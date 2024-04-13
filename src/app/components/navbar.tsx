export default function Navbar() {
  return (
    <nav className='flex justify-between border-gray-200 bg-white p-5 pl-20 pr-20 dark:bg-gray-900'>
      <div>
        <a href='/'>
          <h1 className='text-3xl font-bold'>React</h1>
        </a>
      </div>
      <div className='flex items-center gap-6'>
        <a href='/dashboard'>Dashboard</a>
        <a href='#'>Link 2</a>
        <a href='#'>Link 3</a>
      </div>
    </nav>
  );
}
