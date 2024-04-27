import Container from '../components/container';
import ImageCard from '../components/image-card';
import LogoText from '../components/logo-text';

export default function About() {
  return (
    <>
      <div className='mt-28 flex flex-col items-center justify-between'>
        <div className='relative flex place-items-center'>
          <ImageCard
            title='WELCOME TO SHAHIR.WORLD'
            image={{ url: '/images/profile.jpg', alt: 'My profile picture' }}
          />
        </div>
      </div>

      <div className='m-5 mt-11 md:m-20'>
        <Container>
          <h1 className='text-4xl font-semibold'>About me</h1>
          <p className='mt-5 text-pretty md:mx-auto md:w-3/4'>
            A dedicated and hard-working individual with a strong passion for
            programming. I graduated from Queen Mary University of London with a
            BSc in Computer Science, where I learned the fundamentals of
            software engineering, data structures, algorithms, and web
            development. I also gained valuable experience as a frontend
            developer for IAmFlexi, a project that aimed to help people find
            local jobs or workers as well as other small projects such as this
            one. I am always eager to learn new technologies and improve my
            skills as a developer.
          </p>
          <p className='mt-5 text-pretty md:mx-auto md:w-3/4'>
            Since then, I have picked up many valuable skills through my years
            in RSPB where I have contributed to the creation and maintenance of
            web applications that support the charity mission of saving nature.
            I work with TypeScript, C# and HTML to deliver user-friendly and
            accessible features that enhance the online presence and engagement
            of RSPB.
          </p>
        </Container>
      </div>

      <div className='m-5 mt-11 md:m-20'>
        <Container>
          <h1 className='text-4xl font-semibold'>About this application</h1>
          <p className='mt-5 text-pretty md:mx-auto md:w-3/4'>
            This was a sandbox React app created solely for the purpose of
            experimenting with and learning React. This turned out to be so fun
            that I quickly decided to turn this into a portfolio style app to
            showcase my experiences and projects all in one place.
          </p>

          <LogoText
            logos={[
              {
                src: '/svg/react.svg',
                alt: 'React Logo',
                width: 150,
                height: 50,
              },
              {
                src: '/svg/next.svg',
                alt: 'Next.js Logo',
                width: 200,
                height: 50,
                invert: true,
              },
            ]}
          >
            <p className='mt-4 text-pretty md:mt-0 md:w-1/2'>
              The application is built primarily using the NextJS framework on
              the React library to allow for creation of components, ease of
              routing and general tools for building user interfaces. NextJS
              expands on the capabilities of React and streamlines the
              development and deployment process.
            </p>
          </LogoText>

          <LogoText
            alignment='reverse'
            logos={[
              {
                src: '/svg/tailwindcss.svg',
                alt: 'TailwindCSS Logo',
                width: 200,
                height: 50,
              },
            ]}
          >
            <p className='mt-4 text-pretty md:mt-0 md:w-1/2'>
              The styling is handled using TailwindCSS for its extensive out of
              the box collection of classes, stylised and neat fonts, easy
              coloring as well as its ease of use when creating responsive
              designs.
            </p>
          </LogoText>

          <LogoText
            logos={[
              {
                src: '/svg/azure.svg',
                alt: 'Azure Logo',
                width: 150,
                height: 50,
              },
              {
                src: '/svg/github.svg',
                alt: 'GitHub Logo',
                width: 75,
                height: 50,
                invert: true,
              },
            ]}
          >
            <p className='mt-4 text-pretty md:mt-0 md:w-1/2'>
              The site is hosted on Microsoft Azure as a static web app and
              deployed through GitHub actions via the CI/CD pipeline. There is
              no particular reason Azure was chosen over other services like AWS
              other than the fact I get free monthly credit as part of my Azure
              subscription, allowing me to host without extra charges.
            </p>
          </LogoText>
        </Container>
      </div>
    </>
  );
}
