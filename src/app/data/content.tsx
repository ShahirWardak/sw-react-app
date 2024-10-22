import Image from 'next/image';

export const myIntroText: string = `Passionate about crafting seamless digital experiences, I specialize in building intuitive and efficient software solutions. With a focus on performance, user experience, and scalable design, I enjoy turning complex challenges into elegant, effective results. My work reflects a balance of creativity and technical precision, underpinned by a strong foundation in modern web technologies.`;

export const myTimelineData = [
  {
    title: '2024',
    content: (
      <div>
        <p className='mb-8 font-normal text-neutral-800 dark:text-neutral-300'>
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
      </div>
    ),
  },
  {
    title: 'Early 2023',
    content: (
      <div>
        <p className='mb-8 font-normal text-neutral-800 dark:text-neutral-300'>
          I usually run out of copy, but when I see content this big, I try to
          integrate lorem ipsum.
        </p>
        <p className='mb-8 font-normal text-neutral-800 dark:text-neutral-300'>
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
      </div>
    ),
  },
  {
    title: 'Changelog',
    content: (
      <div>
        <p className='mb-4 font-normal text-neutral-800 dark:text-neutral-300'>
          Deployed 5 new components on Aceternity today
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <Image
            src='/images/blazor-site.png'
            alt='hero template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='/images/blazor-site.png'
            alt='feature template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='/images/blazor-site.png'
            alt='bento template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='/images/blazor-site.png'
            alt='cards template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
];
