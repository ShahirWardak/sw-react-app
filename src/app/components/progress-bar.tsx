import { ProgressBarType } from '../types/progress-bar.types';

export default function ProgressBar(props: ProgressBarType) {
  return (
    <>
      <div className='flex items-center text-right'>
        <p className='w-1/3 lg:w-1/4'>{props.name}</p>
        <div className='mx-3 h-3 w-full rounded-lg bg-neutral-200 lg:w-1/2 dark:bg-neutral-600'>
          <div
            className={
              'h-3 rounded-lg ' +
              (props.color ?? ' bg-discord-blue ') +
              props.progress
            }
          ></div>
        </div>
      </div>
    </>
  );
}
