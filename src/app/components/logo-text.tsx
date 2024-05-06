import Image from 'next/image';
import { LogoTextType } from '../types/logo-text.types';

export default function LogoText(props: LogoTextType) {
  return (
    <div
      className={
        'flex flex-col gap-10 lg:flex-row lg:items-center ' +
        (props.alignment === 'reverse' ? 'lg:flex-row-reverse' : '')
      }
    >
      <div className='flex min-w-fit flex-col items-center'>
        {props.logos.map((logo, i) => (
          <Image
            key={i}
            className={
              'relative ' +
              (logo.invert ? 'dark:invert ' : '') +
              (logo.shadow ? 'dark:drop-shadow-[0_0_0.3rem_#ffffff70]' : '')
            }
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
          />
        ))}
      </div>
      {props.children}
    </div>
  );
}
