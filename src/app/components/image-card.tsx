import Image from 'next/image';
import { ImageCardType } from '../types/image-card.types';

export default function ImageCard(props: ImageCardType) {
  return (
    <main className='flex flex-col items-center gap-10'>
      <h1 className='text-4xl'>{props.title}</h1>
      <Image
        src={props.image.url}
        alt={props.image.alt}
        width={200}
        height={200}
      />
      <p>{props.text}</p>
    </main>
  );
}