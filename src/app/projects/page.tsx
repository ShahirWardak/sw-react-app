import Container from '../components/container';
import IconList from '../components/icon-list';
import LogoText from '../components/logo-text';

export default function Projects() {
  return (
    <main className='mt-28 flex flex-col items-center justify-between'>
      <h1 className='text-5xl font-semibold'>PROJECTS</h1>
      <div className='m-5 mt-11 lg:mt-20'>
        <Container>
          <h1 className='text-4xl font-semibold lg:mb-5'>
            RSPB Angular website
          </h1>
          <LogoText
            justify='justify-center'
            logos={[
              {
                src: '/images/rspb-logo.png',
                alt: 'RSPB Logo',
                width: 150,
                height: 50,
              },
            ]}
            logosAfter={[
              {
                src: '/images/rspb-site.png',
                alt: 'RSPB website image',
                width: 400,
                height: 150,
              },
            ]}
          >
            <div className='mt-5 flex-col lg:mt-0 lg:min-w-fit lg:text-left'>
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
                <li>Jest, Cypress</li>
                <li>Mangolia CMS</li>
                <li>Microsoft Azure</li>
                <li>JIRA</li>
                <li>Chromatic, Storyboard</li>
                <li>GitHub actions build pipelines</li>
              </ul>
              <div className='m-4 mt-10 lg:m-0'>
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
                      src: '/svg/typescript.svg',
                      alt: 'TypeScript Logo',
                    },
                    {
                      src: '/svg/sass.svg',
                      alt: 'Sass Logo',
                    },
                    {
                      src: '/svg/csharp.svg',
                      alt: 'C# Logo',
                    },
                    {
                      src: '/svg/jest.svg',
                      alt: 'Jest Logo',
                    },
                    {
                      src: '/svg/azure.svg',
                      alt: 'Azure Logo',
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
                  ]}
                ></IconList>
              </div>
            </div>
          </LogoText>
        </Container>
      </div>

      <div className='m-5 mt-11 lg:mt-20'>
        <Container>
          <h1 className='text-4xl font-semibold lg:mb-5'>
            IAMFLEXI Django application
          </h1>
          <LogoText
            justify='justify-center'
            logos={[
              {
                src: '/images/iamflexi-logo.png',
                alt: 'IAmFlexi Logo',
                width: 150,
                height: 50,
              },
            ]}
            logosAfter={[
              {
                src: '/images/iamflexi-site.png',
                alt: 'IAmFlexi website image',
                width: 400,
                height: 150,
              },
            ]}
          >
            <div className='mt-5 flex-col lg:mt-0 lg:min-w-fit lg:text-left'>
              <ul className='mt-5 list-inside list-disc text-left'>
                <li>Django framework</li>
                <li>HTML, CSS, Python</li>
                <li>Bootstrap</li>
                <li>AWS</li>
                <li>Trello</li>
                <li>GitHub</li>
              </ul>
              <div className='m-4 mt-10 lg:m-0'>
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
              </div>
            </div>
          </LogoText>
        </Container>
      </div>
    </main>
  );
}
