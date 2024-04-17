import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='p-2 text-center shadow-lg dark:bg-discord-600'>
      <div className='flex justify-center gap-2'>
        <a
          type='button'
          href='https://github.com/ShahirWardak'
          target='_blank'
          className='mb-2 me-2 inline-flex items-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500'
        >
          <Image
            className='me-2 h-4 w-4 invert'
            src='/svg/github.svg'
            alt='GitHub Logo'
            width={20}
            height={20}
            priority
          />
          GitHub
        </a>

        <a
          type='button'
          href='https://www.linkedin.com/in/shahir-wardak/'
          target='_blank'
          className='mb-2 me-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55'
        >
          <Image
            className='me-2 h-4 w-4'
            src='/svg/linkedin.svg'
            alt='LinkedIn Logo'
            width={20}
            height={20}
            priority
          />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
