import { containerType } from '../types/container.types';

export default function Container(props: containerType) {
  return (
    <div className='m-20 rounded-2xl p-5 shadow-2xl dark:bg-discord-900'>
      <p>{props.title}</p>
      {props.children}
    </div>
  );
}
