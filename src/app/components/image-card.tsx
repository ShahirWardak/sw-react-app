import Image from 'next/image';
import { ImageCardType } from '../types/image-card.types';

export default function ImageCard(props: ImageCardType) {
  return (
    <main className='mt-5 flex flex-col items-center gap-10 text-center'>
      <h1 className='text-5xl font-semibold'>{props.title}</h1>
      <Image
        className='shadow-2xl'
        src={props.image.url}
        alt={props.image.alt}
        width={200}
        height={200}
        priority
      />
      <p>{props.text}</p>
    </main>
  );
}
