import { containerType } from '../types/container.types';

export default function Container(props: containerType) {
  return (
    <div className='m-5 mt-11 rounded-2xl p-5 text-center shadow-2xl md:m-20 dark:bg-discord-900'>
      {props.children}
    </div>
  );
}
