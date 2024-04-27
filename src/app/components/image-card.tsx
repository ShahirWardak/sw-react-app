import Image from 'next/image';
import { ImageCardType } from '../types/image-card.types';

export default function ImageCard(props: ImageCardType) {
  return (
    <div className={'flex flex-col items-center gap-5 ' + props.className}>
      <h1 className='animate-fade-up animate-once text-5xl font-medium'>
        {props.title}
      </h1>
      <Image
        className={
          'animate-fade-up animate-once shadow-2xl ' +
          (props.rounded ? 'rounded-full ' : '') +
          (props.border ? 'border-2 border-solid border-discord-100 ' : '')
        }
        src={props.image.url}
        alt={props.image.alt}
        width={300}
        height={200}
        priority={true}
      />
      <span className='animate-fade-up animate-once animate-delay-[500ms]'>
        {props.children}
      </span>
    </div>
  );
}
