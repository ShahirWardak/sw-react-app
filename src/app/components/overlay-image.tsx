import Image from 'next/image';
import { ImageCardType } from '../types/image-card.types';
import { ImageType } from '../types/image.types';

export default function OverlayImage(props: ImageType) {
  return (
    <Image
      className='mx-auto rounded-2xl border-2 border-solid border-discord-300 transition delay-150 ease-in-out lg:absolute lg:-right-40 lg:top-10 lg:hover:scale-150'
      src={props.src}
      alt={props.alt}
      width={props.width ?? 400}
      height={props.height ?? 50}
      priority
    />
  );
}
