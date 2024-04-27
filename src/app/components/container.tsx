import { containerType } from '../types/container.types';

export default function Container(props: containerType) {
  return (
    <div
      className={
        'animate-fade-up animate-once rounded-2xl border-2 border-solid border-discord-300 p-5 text-center shadow-2xl ' +
        props.className
      }
    >
      {props.children}
    </div>
  );
}
