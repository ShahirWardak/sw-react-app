import Container from '../components/container';
import IconList from '../components/icon-list';
import LogoText from '../components/logo-text';
import OverlayImage from '../components/overlay-image';

export default function Projects() {
  return (
    <>
      <h1 className='animate-fade-up animate-once text-center text-5xl font-medium'>
        Projects
      </h1>
      <Container className='animate-delay-[500ms] mt-10 transition ease-in-out hover:border-discord-100 2xl:w-4/5'>
        <LogoText
          justify='justify-between'
          logos={[
            {
              src: '/images/rspb-logo.png',
              alt: 'RSPB Logo',
              width: 150,
              height: 50,
            },
          ]}
        >
          <div className='content-center text-left lg:min-h-80'>
            <h2 className='text-3xl font-medium'>Angular website</h2>
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
            <div className='m-4 lg:m-0'>
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
        <OverlayImage src='/images/rspb-site.png' alt='RSPB website' />
      </Container>

      <Container className='animate-delay-[1000ms] mt-20 transition ease-in-out hover:border-discord-100 2xl:w-4/5'>
        <LogoText
          justify='justify-between'
          logos={[
            {
              src: '/images/iamflexi-logo.png',
              alt: 'IAmFlexi Logo',
              width: 150,
              height: 50,
            },
          ]}
        >
          <div className='content-center text-left lg:min-h-80'>
            <h2 className='text-3xl font-medium'>Django application</h2>
            <ul className='mt-5 list-inside list-disc text-left'>
              <li>Django framework</li>
              <li>HTML, CSS, Python</li>
              <li>Bootstrap</li>
              <li>AWS</li>
              <li>Trello</li>
              <li>GitHub</li>
            </ul>
            <div className='m-4 lg:m-0'>
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
        <OverlayImage
          src='/images/iamflexi-site.png'
          alt='IAmFlexi website image'
        />
      </Container>

      <Container className='animate-delay-[1500ms] mt-20 transition ease-in-out hover:border-discord-100 2xl:w-4/5'>
        <LogoText
          justify='justify-between'
          logos={[
            {
              src: '/images/unity-game-logo.jpg',
              alt: 'Unity Logo',
              width: 150,
              height: 50,
            },
          ]}
        >
          <div className='content-center text-left lg:min-h-80'>
            <h2 className='text-3xl font-medium'>Unity Engine game</h2>
            <ul className='mt-5 list-inside list-disc text-left'>
              <li>Unity game engine</li>
              <li>C# scripts</li>
              <li>3D models</li>
              <li>Animation</li>
              <li>Mesh render</li>
              <li>AI pathing</li>
            </ul>
            <div className='m-4 lg:m-0'>
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
            </div>
          </div>
        </LogoText>
        <OverlayImage
          src='/videos/unity-gameplay.gif'
          alt='My game gameplay animation'
        />
      </Container>

      <Container className='animate-delay-[2000ms] mt-20 transition ease-in-out hover:border-discord-100 2xl:w-4/5'>
        <LogoText
          justify='justify-between'
          logos={[
            {
              src: '/svg/blazor.svg',
              alt: 'Blazor Logo',
              width: 150,
              height: 50,
            },
          ]}
        >
          <div className='content-center text-left lg:min-h-80'>
            <h2 className='text-3xl font-medium'>Blazor application</h2>
            <ul className='mt-5 list-inside list-disc text-left'>
              <li>Blazor</li>
              <li>C#</li>
              <li>.NET Core</li>
              <li>Azure static & server-side web apps</li>
              <li>Azure functions</li>
              <li>Github build actions</li>
            </ul>
            <div className='m-4 lg:m-0'>
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
            </div>
          </div>
        </LogoText>
        <OverlayImage src='/images/blazor-site.png' alt='My blazor site' />
      </Container>

      <Container className='animate-delay-[2500ms] mt-20 transition ease-in-out hover:border-discord-100 2xl:w-4/5'>
        <LogoText
          justify='justify-between'
          logos={[
            {
              src: '/images/java-ai-game.png',
              alt: 'My java AI game',
              width: 150,
              height: 50,
            },
          ]}
        >
          <div className='content-center text-left lg:min-h-80'>
            <h2 className='text-3xl font-medium'>AI Gomoku player</h2>
            <ul className='mt-5 list-inside list-disc text-left'>
              <li>Java</li>
              <li>BlueJ</li>
              <li>Adversial search</li>
              <li>Min/max algorithm</li>
              <li>Alpha beta pruning</li>
            </ul>
            <div className='m-4 lg:m-0'>
              <IconList
                icons={[
                  {
                    src: '/svg/java.svg',
                    alt: 'Java Logo',
                  },
                ]}
              ></IconList>
            </div>
          </div>
        </LogoText>
        <OverlayImage
          src='/images/java-ai-code.png'
          alt='My java AI game code'
        />
      </Container>
    </>
  );
}
