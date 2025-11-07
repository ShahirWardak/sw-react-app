import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';

type IntroTextProps = {
  text?: string;
};

export default function IntroText({ text }: IntroTextProps) {
  return (
    <>
      <TextGenerateEffect
        className='text-center text-2xl text-neutral-300'
        duration={2.0}
        words={text ?? ''}
      />
    </>
  );
}
