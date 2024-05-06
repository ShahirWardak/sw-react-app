import Container from '../components/container';
import LogoText from '../components/logo-text';

export default function About() {
  return (
    <>
      <h1 className='animate-fade-up text-center text-5xl font-medium animate-once'>
        About this app
      </h1>
      <Container className='mx-auto mt-10 animate-delay-[500ms] lg:w-4/5'>
        <LogoText
          logos={[
            {
              src: '/svg/react.svg',
              alt: 'React Logo',
              width: 150,
              height: 50,
              shadow: true,
            },
            {
              src: '/svg/next.svg',
              alt: 'Next.js Logo',
              width: 150,
              height: 50,
              invert: true,
              shadow: true,
            },
          ]}
        >
          <p>
            The application is built primarily using the NextJS framework on the
            React library to allow for creation of components, ease of routing
            and general tools for building user interfaces. NextJS expands on
            the capabilities of React and streamlines the development and
            deployment process.
          </p>
        </LogoText>
      </Container>

      <Container className='mx-auto mt-10 animate-delay-[1000ms] lg:w-4/5'>
        <LogoText
          alignment='reverse'
          logos={[
            {
              src: '/svg/tailwindcss.svg',
              alt: 'TailwindCSS Logo',
              width: 200,
              height: 50,
              shadow: true,
            },
          ]}
        >
          <p>
            The styling is handled using TailwindCSS for its extensive out of
            the box collection of classes, stylised and neat fonts, easy
            coloring as well as its ease of use when creating responsive
            designs. The tailwind animations plugin is used to handle the
            fade-in etc animations.
          </p>
        </LogoText>
      </Container>

      <Container className='mx-auto mt-10 animate-delay-[1500ms] lg:w-4/5'>
        <LogoText
          logos={[
            {
              src: '/svg/azure.svg',
              alt: 'Azure Logo',
              width: 125,
              height: 50,
              shadow: true,
            },
            {
              src: '/svg/github.svg',
              alt: 'GitHub Logo',
              width: 50,
              height: 50,
              invert: true,
              shadow: true,
            },
          ]}
        >
          <p>
            The site is hosted on Microsoft Azure as a static web app and
            deployed through GitHub actions via the CI/CD pipeline. There is no
            particular reason Azure was chosen over other services like AWS
            other than the fact I get free monthly credit as part of my Azure
            subscription, allowing me to host without extra charges.
          </p>
        </LogoText>
      </Container>
    </>
  );
}
