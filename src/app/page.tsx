'use client';
import React from 'react';
import IntroLamp from './components/sections/intro-lamp';
import IntroText from './components/sections/intro-text';
import { Timeline } from './components/ui/timeline';
import { myIntroText, myTimelineData } from './data/content';
import AboutMe from './components/sections/about-me';

export default function Home() {
  return (
    <>
      <IntroLamp heading='Shahir Wardak' />

      <div className='container'>
        <IntroText text={myIntroText} />

        <div className='mb-32 lg:mb-60'></div>

        <h2 className='mb-20 text-center text-lg font-extrabold text-black dark:text-neutral-300 md:text-4xl'>
          About me
        </h2>
        <AboutMe />

        <div className='mb-32 lg:mb-60'></div>

        <div className='relative w-full overflow-clip'>
          <h2 className='text-center text-lg font-extrabold text-black dark:text-neutral-300 md:text-4xl'>
            My works
          </h2>
          <Timeline data={myTimelineData} />
        </div>

        <p>END</p>
      </div>
    </>
  );
}
