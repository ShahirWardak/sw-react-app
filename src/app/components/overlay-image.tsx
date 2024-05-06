import Image from 'next/image';
import { ImageType } from '../types/image.types';

export default function OverlayImage(props: ImageType) {
  return (
    <div className='relative mx-auto h-48 md:h-96 lg:absolute lg:-right-40 lg:top-10 lg:h-1/2 lg:w-2/5'>
      <Image
        className='rounded-2xl border-2 border-solid border-discord-300 transition delay-150 ease-in-out lg:hover:scale-150'
        src={props.src}
        alt={props.alt}
        sizes='200px'
        fill={true}
        style={{
          objectFit: 'cover',
        }}
        priority
        unoptimized
      />
    </div>
  );
}
