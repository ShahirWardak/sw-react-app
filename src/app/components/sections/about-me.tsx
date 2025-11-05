import React from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import SkillIconsList from '../skill-icons-list';

type IntroTextProps = {
  text?: string;
};

export default function AboutMe({ text }: IntroTextProps) {
  return (
    <>
      <div className='flex flex-col justify-center gap-16 text-center lg:flex-row lg:gap-32'>
        <div className='flex flex-col lg:w-1/2'>
          <Image
            className='relative self-center dark:invert'
            src='/svg/user1.svg'
            alt='User Logo'
            width={300}
            height={300}
            priority
          />
          <p>
            A full-stack developer who loves turning ideas into meaningful
            digital products. Whether it’s designing smooth, responsive
            interfaces or building the systems behind them, I enjoy every part
            of the process. I’m always exploring new tools, refining my craft,
            and finding smarter ways to solve real-world problems. When I’m not
            coding, you’ll probably find me reading, staying active, or
            experimenting with a new side project.
          </p>
          <p>TODO</p>
          <p>
            add blocks: https://benscott.dev/#about add background
            https://ui.aceternity.com/components/shooting-stars-and-stars-background
          </p>
        </div>
        <div className='flex justify-center gap-5 lg:w-1/2'>
          <SkillIconsList
            items={[
              { name: 'C#', icon: '/svg/csharp.svg' },
              { name: 'JavaScript', icon: '/svg/javascript.svg' },
              {
                name: 'NextJS',
                icon: '/svg/next-rounded.svg',
                invertIcon: true,
              },
            ]}
          />
          <SkillIconsList
            items={[
              { name: 'Typescript', icon: '/svg/typescript.svg' },
              { name: 'HTML', icon: '/svg/html.svg' },
              { name: 'Angular', icon: '/svg/angular.svg' },
              { name: 'React', icon: '/svg/react.svg' },
            ]}
          />
          <SkillIconsList
            items={[
              { name: 'Sass', icon: '/svg/sass.svg' },
              { name: 'Tailwind', icon: '/svg/tailwindcss.svg' },
              { name: 'Git', icon: '/svg/git.svg' },
            ]}
          />
        </div>
      </div>
    </>
  );
}
