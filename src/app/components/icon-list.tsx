import Image from 'next/image';
import { IconListType } from '../types/icon-list.types';

export default function IconList(props: IconListType) {
  return (
    <div className='mt-4 flex flex-wrap justify-center gap-4 lg:justify-start'>
      {props.icons.map((logo, i) => (
        <Image
          key={i}
          className={'relative ' + (logo.invert ? 'dark:invert' : '')}
          src={logo.src}
          alt={logo.alt}
          width={30}
          height={30}
          priority
        />
      ))}
    </div>
  );
}
