import Image from 'next/image';
import IconList from '../components/icon-list';
import TimelineItem from '../components/ui/timeline-item';

export const myIntroText: string = `Passionate about crafting seamless digital experiences, I specialize in building intuitive and efficient software solutions. With a focus on performance, user experience, and scalable design, I enjoy turning complex challenges into elegant, effective results. My work reflects a balance of creativity and technical precision, underpinned by a strong foundation in modern web technologies.`;

export const myTimelineData = [
  {
    title: 'Current',
    content: (
      <>
        {/* Angular app at RSPB */}
        <TimelineItem
          url='https://www.rspb.org.uk'
          title='Angular Application'
          description='Replatform of the main web application to Angular and implementation of design system, microservice architecture, headless CMS and Azure infrastruction.'
          skillsList={[
            'Angular',
            'HTML, Sass, Typescript',
            '.Net 8, C#',
            'Jest, Cypress',
            'Magnolia CMS',
            'Azure, Service Bus, CosmosDB, Functions, App services',
            'JIRA',
            'Chromatic, Storybook',
            'Microservices',
            'GitHub CI/CD pipelines',
          ]}
          images={[
            {
              src: '/images/rspb-site.png',
              alt: 'rspb website',
              width: 500,
              height: 500,
            },
            {
              src: '/images/rspb-logo.png',
              alt: 'rspb logo',
              width: 150,
              height: 500,
            },
          ]}
        >
          <IconList
            icons={[
              {
                src: '/svg/angular.svg',
                alt: 'Angular Logo',
              },
              {
                src: '/svg/html.svg',
                alt: 'HTML Logo',
              },
              {
                src: '/svg/sass.svg',
                alt: 'Sass Logo',
              },
              {
                src: '/svg/typescript.svg',
                alt: 'TypeScript Logo',
              },
              {
                src: '/svg/csharp.svg',
                alt: 'C Sharp Logo',
              },
              {
                src: '/svg/jest.svg',
                alt: 'Jest Logo',
              },
              {
                src: '/svg/jira.svg',
                alt: 'JIRA Logo',
              },
              {
                src: '/svg/storybook.svg',
                alt: 'Storybook Logo',
              },
              {
                src: '/svg/github.svg',
                alt: 'GitHub Logo',
                invert: true,
              },
              {
                src: '/svg/azure.svg',
                alt: 'Azure Logo',
              },
            ]}
          ></IconList>
        </TimelineItem>
      </>
    ),
  },
  {
    title: '2024',
    content: (
      <>
        {/* Family Tree app */}
        <TimelineItem
          url='https://family.shahir.world'
          title='React Family Tree'
          description='A react web app with an interactive view of my family tree/genealogy usitiling React Flow for interactivity and Supabase for authentication and storing information.'
          skillsList={[
            'React',
            'NextJS',
            'React Flow',
            'Supabase SQL, Authentication',
            'Tailwind',
          ]}
          images={[
            {
              src: '/images/family-tree-site.png',
              alt: 'Family Tree website screenshot',
              width: 500,
              height: 500,
            },
            {
              src: '/images/family-tree-site2.png',
              alt: 'Family Tree website screenshot',
              width: 500,
              height: 500,
            },
          ]}
        >
          <IconList
            icons={[
              {
                src: '/svg/react.svg',
                alt: 'React Native Logo',
              },
              {
                src: '/svg/typescript.svg',
                alt: 'TypeScript Logo',
              },
              {
                src: '/svg/next.svg',
                alt: 'Next Logo',
                invert: true,
              },
              {
                src: '/svg/supabase.svg',
                alt: 'Supabase Logo',
              },
              {
                src: '/svg/tailwindcss.svg',
                alt: 'Tailwind CSS Logo',
              },
            ]}
          ></IconList>
        </TimelineItem>

        {/* Planning Poker app */}
        <TimelineItem
          className='mt-20'
          url='https://planning-poker-seven-coral.vercel.app/'
          title='React Planning Poker'
          description='[REBUILD IN PROGRESS] A react web app tool used for planning poker session and ticket sizing exercises utilising websocket and server for live communication.'
          skillsList={['React', 'NextJS', 'Websocket', 'Tailwind']}
          images={[
            {
              src: '/images/planning-poker1.png',
              alt: 'Planning Poker website screenshot',
              width: 500,
              height: 500,
            },
            {
              src: '/images/planning-poker2.png',
              alt: 'Planning Poker website screenshot',
              width: 500,
              height: 500,
            },
          ]}
        >
          <IconList
            icons={[
              {
                src: '/svg/react.svg',
                alt: 'React Native Logo',
              },
              {
                src: '/svg/typescript.svg',
                alt: 'TypeScript Logo',
              },
              {
                src: '/svg/next.svg',
                alt: 'Next Logo',
                invert: true,
              },
              {
                src: '/svg/tailwindcss.svg',
                alt: 'Tailwind CSS Logo',
              },
            ]}
          ></IconList>
        </TimelineItem>

        {/* Scanner app */}
        <TimelineItem
          className='mt-20'
          title='React Native Mobile App'
          description='A mobile scanner application able to scan barcodes, query a database via search functionality, fetch stock information and store and update cart information.'
          skillsList={[
            'React Native',
            'Expo',
            'Firebase NoSQL, Authentication',
            'Tamagui styling library',
          ]}
          images={[
            {
              src: '/images/scanner-app1.jpg',
              alt: 'Scanner application screenshot 1',
              width: 200,
              height: 500,
            },
            {
              src: '/images/scanner-app2.jpg',
              alt: 'Scanner application screenshot 2',
              width: 200,
              height: 500,
            },
          ]}
        >
          <IconList
            icons={[
              {
                src: '/svg/react.svg',
                alt: 'React Native Logo',
              },
              {
                src: '/svg/typescript.svg',
                alt: 'TypeScript Logo',
              },
              {
                src: '/svg/expo.svg',
                alt: 'Expo Logo',
                invert: true,
              },
              {
                src: '/svg/firebase.svg',
                alt: 'Firebase Logo',
              },
            ]}
          ></IconList>
        </TimelineItem>
      </>
    ),
  },
  {
    title: '2020',
    content: (
      <>
        {/* Junior role at RSPB */}
        <TimelineItem
          title='EpiServer Web App'
          description='Started my role as Junior developer at RSPB with works involving working on the main web application built in EpiServer CMS.'
          skillsList={[
            'EpiServer (now Optimizely)',
            'HTML, CSS, JavaScript',
            'Scss',
            'GitHub',
            'Azure DevOps',
          ]}
          images={[
            {
              src: '/images/rspb-old-site.png',
              alt: 'rspb old website',
              width: 500,
              height: 500,
            },
            {
              src: '/images/rspb-old-logo.jpg',
              alt: 'rspb old logo',
              width: 150,
              height: 500,
            },
          ]}
        >
          <IconList
            icons={[
              {
                src: '/svg/optimizely.svg',
                alt: 'Optimizely Logo',
              },
              {
                src: '/svg/html.svg',
                alt: 'HTML Logo',
              },
              {
                src: '/svg/css.svg',
                alt: 'CSS Logo',
              },
              {
                src: '/svg/sass.svg',
                alt: 'Sass Logo',
              },
              {
                src: '/svg/javascript.svg',
                alt: 'JavaScript Logo',
              },
              {
                src: '/svg/github.svg',
                alt: 'GitHub Logo',
                invert: true,
              },
              {
                src: '/svg/azure.svg',
                alt: 'Azure Logo',
              },
            ]}
          ></IconList>
        </TimelineItem>

        {/* IAmFlexi Django Project */}
        <TimelineItem
          className='mt-20'
          title='Django Application'
          description='A group project with the purpose of delivering a website used to find quick jobs locally utilising functionality such as map
          and radius to be able to find and filter results better.'
          skillsList={[
            'Django framework',
            'HTML, CSS, Python',
            'Bootstrap',
            'AWS',
            'Trello',
            'GitHub',
          ]}
          images={[
            {
              src: '/images/iamflexi-site.png',
              alt: 'django website page image',
              width: 500,
              height: 500,
            },
            {
              src: '/images/iamflexi-logo.png',
              alt: 'django website logo image',
              width: 250,
              height: 500,
            },
          ]}
        >
          <IconList
            icons={[
              {
                src: '/svg/django.svg',
                alt: 'Django Logo',
              },
              {
                src: '/svg/html.svg',
                alt: 'HTML Logo',
              },
              {
                src: '/svg/python.svg',
                alt: 'Python Logo',
              },
              {
                src: '/svg/css.svg',
                alt: 'CSS Logo',
              },
              {
                src: '/svg/bootstrap.svg',
                alt: 'Bootstrap Logo',
              },
              {
                src: '/svg/trello.svg',
                alt: 'Trello Logo',
              },
              {
                src: '/svg/github.svg',
                alt: 'GitHub Logo',
                invert: true,
              },
            ]}
          ></IconList>
        </TimelineItem>

        {/* Blazor Project */}
        <TimelineItem
          className='mt-20'
          title='Blazor Application'
          description='A simple Blazor application built for the purpose of learning server-side rendering, 
          application deployment, build pipelines and simple API requests to Azure functions.'
          skillsList={[
            'Blazor',
            'C#',
            '.NET Core',
            'Azure static & server-side web apps',
            'Azure functions',
            'Github build actions',
          ]}
          images={[
            {
              src: '/images/blazor-site.png',
              alt: 'blazor site image',
              width: 500,
              height: 500,
            },
          ]}
        >
          <IconList
            icons={[
              {
                src: '/svg/blazor.svg',
                alt: 'Blazor Logo',
              },
              {
                src: '/svg/csharp.svg',
                alt: 'C# Logo',
              },
              {
                src: '/svg/dotnetcore.svg',
                alt: 'DotNet Core Logo',
              },
              {
                src: '/svg/Azure.svg',
                alt: 'Azure Logo',
              },
              {
                src: '/svg/github.svg',
                alt: 'Github Logo',
                invert: true,
              },
            ]}
          ></IconList>
        </TimelineItem>
      </>
    ),
  },
  {
    title: '2019',
    content: (
      <>
        {/* Unity Game Project */}
        <TimelineItem
          title='Unity Engine game'
          description='A 3D game built as part of my final dissertation project using the
            Unity game engine. This involved working with C# scripts, 3D
            modelling, Animation, Mesh rendering, AI pathing and more.'
          skillsList={[
            'Unity game engine',
            'C# scripts',
            '3D models',
            'Animation',
            'Mesh render',
            'AI pathing',
          ]}
          images={[
            {
              src: '/videos/unity-gameplay.gif',
              alt: 'unity game gameplay gif',
              width: 500,
              height: 500,
            },
            {
              src: '/images/unity-game-logo.jpg',
              alt: 'unity game logo',
              width: 250,
              height: 500,
            },
          ]}
        >
          <IconList
            icons={[
              {
                src: '/svg/unity.svg',
                alt: 'Unity Logo',
                invert: true,
              },
              {
                src: '/svg/csharp.svg',
                alt: 'C# Logo',
              },
            ]}
          ></IconList>
        </TimelineItem>

        {/* AI Gomoku Project */}
        <TimelineItem
          className='mt-20'
          title='AI Gomoku player'
          description='A program that utilised AI algorithm to play a game of Gomoku
            against a human player.'
          skillsList={[
            'Java',
            'BlueJ',
            'Adversial search',
            'Min/max algorithm',
            'Alpha beta pruning',
          ]}
          images={[
            {
              src: '/images/java-ai-code.png',
              alt: 'gomoku game code image',
              width: 500,
              height: 500,
            },
            {
              src: '/images/java-ai-game.png',
              alt: 'gomoku game image',
              width: 200,
              height: 500,
            },
          ]}
        >
          <IconList
            icons={[
              {
                src: '/svg/java.svg',
                alt: 'Java Logo',
              },
            ]}
          ></IconList>
        </TimelineItem>
      </>
    ),
  },
];
