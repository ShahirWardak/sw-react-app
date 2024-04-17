import Container from '../components/container';
import IconList from '../components/icon-list';
import LogoText from '../components/logo-text';

export default function Dashboard() {
  return (
    <main className='mt-28 flex flex-col items-center justify-between'>
      <h1 className='text-5xl font-semibold'>PROJECTS</h1>
      <div className='relative flex place-items-center'>
        <Container>
          <h1 className='text-4xl font-semibold md:mb-5'>RSPB</h1>
          <LogoText
            logos={[
              {
                src: '/images/rspb-logo.png',
                alt: 'RSPB Logo',
                width: 150,
                height: 50,
              },
            ]}
          >
            <div className='mt-5 flex-col md:mt-0'>
              <a
                href='https://www.rspb.org.uk'
                className='font-medium text-blue-600 underline underline-offset-2 dark:text-blue-500'
                target='_blank'
              >
                www.rspb.org.uk
              </a>
              <ul className='mt-5 list-inside list-disc text-left'>
                <li>Angular framework</li>
                <li>HTML, Sass, TypeScript</li>
                <li>C#</li>
                <li>Mangolia CMS</li>
                <li>Microsoft Azure</li>
              </ul>
              <IconList
                icons={[
                  {
                    src: '/svg/react.svg',
                    alt: 'RSPB Logo',
                  },
                  {
                    src: '/svg/next.svg',
                    alt: 'RSPB Logo',
                    invert: true,
                  },
                  {
                    src: '/svg/tailwindcss.svg',
                    alt: 'RSPB Logo',
                  },
                ]}
              ></IconList>
            </div>
          </LogoText>
        </Container>
      </div>
    </main>
  );
}
