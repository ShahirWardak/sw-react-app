'use client';
import React from 'react';
import IntroLamp from './components/sections/intro-lamp';
import IntroText from './components/sections/intro-text';

export default function Home() {
  return (
    <>
      <IntroLamp heading='Shahir Wardak' />

      <div className='container'>
        <IntroText />
      </div>
    </>
  );
}
