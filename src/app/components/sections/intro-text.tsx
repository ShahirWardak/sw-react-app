import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';

type IntroTextProps = {
  text?: string;
};

const words = `A dedicated and passionate software developer with a BSc in Computer Science from Queen Mary University of London. My academic background has provided me with a solid foundation in software engineering, data structures, algorithms, and web development.`;

export default function IntroText({ text }: IntroTextProps) {
  return (
    <>
      <TextGenerateEffect
        className='text-center text-2xl text-neutral-300'
        duration={0.3}
        words={words}
      />
    </>
  );
}
