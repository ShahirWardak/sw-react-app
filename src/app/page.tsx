'use client';
import React from 'react';
import IntroLamp from './components/sections/intro-lamp';
import IntroText from './components/sections/intro-text';
import { Timeline } from './components/ui/timeline';
import { myIntroText, myTimelineData } from './data/content';

export default function Home() {
  return (
    <>
      <IntroLamp heading='Shahir Wardak' />

      <div className='container'>
        <IntroText text={myIntroText} />

        <div className='mb-40'></div>

        <Timeline data={myTimelineData} />
      </div>
    </>
  );
}
