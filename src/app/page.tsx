import Container from './components/container';
import ImageCard from './components/image-card';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='mt-28 flex flex-col items-center justify-between'>
        <div className='relative flex place-items-center'>
          <ImageCard
            title='Welcome to Shahir.World'
            image={{ url: '/profile.jpg', alt: 'My profile picture' }}
            text='What a wonderful world it is.'
          />
        </div>
      </div>

      <Container>
        <h1 className='text-3xl font-semibold'>About this app</h1>
        <p className='mt-5 text-pretty'>
          This was a sandbox React app created solely for the purpose of
          experimenting with and learning React. This turned out to be so fun
          that I quickly decided to turn this into a portfolio style app to
          showcase my experiences and projects all in one place.
        </p>
        <div className='mt-10 flex flex-col items-center md:mt-0 md:flex-row'>
          <div className='flex flex-col items-center md:min-w-fit md:p-10'>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
              src='/react.svg'
              alt='React Logo'
              width={150}
              height={50}
              priority
            />
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/next.svg'
              alt='Next.js Logo'
              width={200}
              height={50}
              priority
            />
          </div>
          <p className='mt-4 text-pretty md:mt-0'>
            The application is built primarily using the NextJS framework on the
            React library to allow for creation of components, ease of routing
            and general tools for building user interfaces. NextJS expands on
            the capabilities of React and streamlines the development and
            deployment process.
          </p>
        </div>
        <div className='mt-10 flex flex-col items-center md:mt-0 md:flex-row-reverse'>
          <div className='flex flex-col items-center md:p-10'>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
              src='/tailwindcss.svg'
              alt='TailwindCSS Logo'
              width={200}
              height={50}
              priority
            />
          </div>
          <p className='mt-4 text-pretty md:mt-0'>
            The styling is handled using TailwindCSS for its extensive out of
            the box collection of classes as well as its ease of use when
            creating responsive designs.
          </p>
        </div>
        <div className='mt-10 flex flex-col items-center md:mt-0 md:flex-row'>
          <div className='flex flex-col items-center md:min-w-fit md:p-10'>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
              src='/azure.svg'
              alt='Azure Logo'
              width={150}
              height={50}
              priority
            />
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/github.svg'
              alt='GitHub Logo'
              width={75}
              height={50}
              priority
            />
          </div>
          <p className='mt-4 text-pretty md:mt-0'>
            The site is hosted on Microsoft Azure as a static web app and
            deployed through GitHub actions via the CI/CD pipeline.
          </p>
        </div>
      </Container>

      <Container>
        <h1 className='text-3xl font-semibold'>Another container component</h1>
        <p className='mt-5 text-pretty'>Lorem ipsum</p>
      </Container>
    </>
  );
}
