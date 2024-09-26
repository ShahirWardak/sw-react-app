import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LampContainer } from '../ui/lamp';

type IntroLampProps = {
  heading: string;
};

export default function IntroLamp({ heading }: IntroLampProps) {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: 'easeInOut',
          }}
          className='mt-8 bg-gradient-to-br from-neutral-300 to-neutral-600 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
        >
          {heading}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 0.7, y: -25 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: 'easeInOut',
          }}
          className='flex gap-4'
        >
          <a href='https://github.com/ShahirWardak' target='_blank'>
            <Image
              className='invert'
              src='/svg/github.svg'
              alt='GitHub Logo'
              width={30}
              height={15}
              priority
            />
          </a>

          <a href='https://www.linkedin.com/in/shahir-wardak/' target='_blank'>
            <Image
              src='/svg/linkedin.svg'
              alt='LinkedIn Logo'
              width={30}
              height={15}
              priority
            />
          </a>
        </motion.div>
      </LampContainer>
    </>
  );
}
