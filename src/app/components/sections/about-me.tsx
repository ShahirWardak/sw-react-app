import React from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from '../ui/text-generate-effect';

type IntroTextProps = {
  text?: string;
};

export default function AboutMe({ text }: IntroTextProps) {
  return (
    <>
      <div className='flex justify-center gap-32 text-center'>
        <div className='flex w-1/2 flex-col'>
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
        </div>
        <div className='flex w-1/2 flex-col'>
          <p>TODO</p>
          <p>
            add blocks: https://benscott.dev/#about add background
            https://ui.aceternity.com/components/shooting-stars-and-stars-background
          </p>
        </div>
      </div>
    </>
  );
}
