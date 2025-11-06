'use client';
import React, { useRef } from 'react';
import IntroLamp from './components/sections/intro-lamp';
import IntroText from './components/sections/intro-text';
import { Timeline } from './components/ui/timeline';
import { myIntroText, myTimelineData } from './data/content';
import AboutMe from './components/sections/about-me';
import { ShootingStars } from './components/ui/shooting-stars';
import { StarsBackground } from './components/ui/stars-background';
import StickyNav from './components/sticky-nav';

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sections = [
    { id: 'home', label: 'Home', ref: homeRef },
    { id: 'about', label: 'About Me', ref: aboutRef },
    { id: 'works', label: 'My Works', ref: worksRef },
    { id: 'contact', label: 'Contact', ref: contactRef },
  ];

  return (
    <>
      <span ref={homeRef}></span>
      <IntroLamp heading='Shahir Wardak' />

      <div className='mb-16 lg:mb-32'></div>

      <IntroText text={myIntroText} />

      <div className='mb-10 lg:mb-20'></div>

      <StickyNav sections={sections} />

      <div className='mb-10 lg:mb-20'></div>

      <div className='container relative'>
        <h2
          ref={aboutRef}
          id='about-section'
          className='mb-10 text-center text-2xl font-extrabold text-black dark:text-neutral-300 md:text-4xl'
        >
          About me
        </h2>
        <AboutMe />

        <div className='mb-32 lg:mb-60'></div>

        <div className='relative w-full overflow-clip'>
          <h2
            ref={worksRef}
            id='timeline-section'
            className='text-center text-2xl font-extrabold text-black dark:text-neutral-300 md:text-4xl'
          >
            My works
          </h2>
          <Timeline data={myTimelineData} />
        </div>

        <div className='mb-32 lg:mb-60'></div>

        <h2
          ref={contactRef}
          id='contact-section'
          className='mb-10 text-center text-2xl font-extrabold text-black dark:text-neutral-300 md:text-4xl'
        >
          Contact me
        </h2>

        <ShootingStars className='-z-50' />
        <StarsBackground className='-z-50' />
      </div>
    </>
  );
}
