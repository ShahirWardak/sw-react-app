import { containerType } from '../types/container.types';

export default function Container(props: containerType) {
  return (
    <div
      className={
        'w-full rounded-2xl p-5 text-center shadow-2xl dark:bg-discord-900 ' +
        props.className
      }
    >
      {props.children}
    </div>
  );
}
