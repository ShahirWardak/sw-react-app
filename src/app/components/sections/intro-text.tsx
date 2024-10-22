import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';

type IntroTextProps = {
  text?: string;
};

const words = `Passionate about crafting seamless digital experiences, I specialize in building intuitive and efficient software solutions. With a focus on performance, user experience, and scalable design, I enjoy turning complex challenges into elegant, effective results. My work reflects a balance of creativity and technical precision, underpinned by a strong foundation in modern web technologies.`;

export default function IntroText({ text }: IntroTextProps) {
  return (
    <>
      <TextGenerateEffect
        className='text-2xl text-neutral-300'
        duration={0.3}
        words={words}
      />
    </>
  );
}
