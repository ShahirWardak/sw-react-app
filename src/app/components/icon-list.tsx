import Image from 'next/image';
import { IconListType } from '../types/icon-list.types';

export default function IconList(props: IconListType) {
  return (
    <div className='mt-4 flex flex-wrap justify-center gap-4'>
      {props.icons.map((logo, i) => (
        <Image
          key={i}
          className={
            'relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] ' +
            (logo.invert ? 'dark:invert' : '')
          }
          src={logo.src}
          alt={logo.alt}
          width={35}
          height={35}
          priority
        />
      ))}
    </div>
  );
}
