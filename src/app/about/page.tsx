import ChipList from '../components/chip-list';
import ProgressBar from '../components/progress-bar';

export default function About() {
  return (
    <>
      <div className='mx-auto mt-20 animate-fade-up text-center animate-delay-[500ms] animate-once'>
        <h3 className='mb-2 text-center text-xl'>Skills</h3>
        <div>
          <ChipList
            items={[
              'GitHub',
              'Test-Driven Development (TDD)',
              'Azure DevOps',
              'API management',
              'Build pipelines',
              'JIRA',
              'Agile Methodology (Scrum)',
              'Magnolia CMS',
              'EpiServer CMS',
              'Storybook',
              'TailwindCSS',
              'Bootstrap',
              'Chromatic',
              'Android Studio',
              'Dart',
              'Flutter',
            ]}
          />
        </div>
        <div className='mt-10'>
          <ChipList
            items={[
              'Teamwork',
              'Punctuality',
              'Communication',
              'Time management',
              'Interpersonal skills',
              'Time management',
            ]}
          />
        </div>
      </div>

      <div className='mx-auto mt-20 animate-fade-up animate-delay-[1000ms] animate-once'>
        <h3 className='mb-2 text-center text-xl'>Core Tech Stack</h3>
        <ProgressBar name='Angular' progress='w-full' />
        <ProgressBar name='TypeScript' progress='w-full' />
        <ProgressBar name='HTML' progress='w-full' />
        <ProgressBar name='CSS' progress='w-11/12' />
        <ProgressBar name='Git' progress='w-11/12' />
        <ProgressBar name='Sass' progress='w-10/12' />
        <ProgressBar name='C#' progress='w-9/12' />
        <p className='mt-2 text-center text-xs text-neutral-400'>
          Note: the progress bars are relative to my other skills
        </p>
      </div>

      <div className='mx-auto mt-20 animate-fade-up animate-delay-[1500ms] animate-once'>
        <h3 className='mb-2 text-center text-xl'>Additional Skills</h3>
        <ProgressBar name='JavaScript' progress='w-full' />
        <ProgressBar name='Java' progress='w-10/12' />
        <ProgressBar name='Microsoft Azure' progress='w-9/12' />
        <ProgressBar name='React' progress='w-8/12' />
        <ProgressBar name='NextJS' progress='w-8/12' />
        <ProgressBar name='.NET' progress='w-7/12' />
        <ProgressBar name='Django' progress='w-7/12' />
        <ProgressBar name='NPM' progress='w-6/12' />
        <ProgressBar name='Unity' progress='w-4/12' />
        <ProgressBar name='Unreal Engine' progress='w-3/12' />
        <p className='mt-2 text-center text-xs text-neutral-400'>
          Note: the progress bars are relative to my other skills
        </p>
      </div>

      <div className='mx-auto mb-20 mt-20 animate-fade-up text-center animate-delay-[2000ms] animate-once'>
        <div className='mt-10'>
          <p className='mb-4'>
            For my professional experience and contact details please take a
            look at my resume by clicking the download button below.
          </p>
          <a
            href='/files/Shahir Wardak.pdf'
            download='Shahir Wardak CV'
            target='_blank'
          >
            <button
              type='button'
              className='inline-flex items-baseline rounded-full border-2 border-discord-100 px-6 pb-[6px] pt-2 text-lg font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0'
              data-twe-ripple-init
            >
              <span>Download Resume</span>
              <svg
                className='ml-4 h-4 w-4 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
