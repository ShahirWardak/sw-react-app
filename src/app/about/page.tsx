import ProgressBar from '../components/progress-bar';

export default function About() {
  return (
    <>
      <div className='mx-auto mt-20 animate-fade-up animate-delay-[500ms] animate-once'>
        <h3 className='mb-2 text-center text-xl'>Core Tech Stack</h3>
        <ProgressBar name='Angular' progress='full' />
        <ProgressBar name='TypeScript' progress='full' />
        <ProgressBar name='HTML' progress='full' />
        <ProgressBar name='CSS' progress='11/12' />
        <ProgressBar name='Git' progress='11/12' />
        <ProgressBar name='Sass' progress='10/12' />
        <ProgressBar name='C#' progress='9/12' />
        <p className='mt-2 text-center text-xs text-neutral-400'>
          Note: the progress bars are relative to my other skills
        </p>
      </div>

      <div className='mx-auto mt-20 animate-fade-up animate-delay-[1000ms] animate-once'>
        <h3 className='mb-2 text-center text-xl'>Additional Skills</h3>
        <ProgressBar name='JavaScript' progress='full' />
        <ProgressBar name='Java' progress='10/12' />
        <ProgressBar name='Microsoft Azure' progress='9/12' />
        <ProgressBar name='React' progress='8/12' />
        <ProgressBar name='NextJS' progress='8/12' />
        <ProgressBar name='.NET' progress='7/12' />
        <ProgressBar name='Django' progress='7/12' />
        <ProgressBar name='NPM' progress='6/12' />
        <ProgressBar name='Unity' progress='4/12' />
        <ProgressBar name='Unreal Engine' progress='3/12' />
        <p className='mt-2 text-center text-xs text-neutral-400'>
          Note: the progress bars are relative to my other skills
        </p>
      </div>
    </>
  );
}
