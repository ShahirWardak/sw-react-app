import Image from 'next/image';
import { LogoTextType } from '../types/logo-text.types';

export default function LogoText(props: LogoTextType) {
  return (
    <>
      <div
        className={
          'mt-10 flex flex-col items-center md:mt-0 ' +
          (props.alignment === 'reverse'
            ? 'md:flex-row-reverse'
            : 'md:flex-row')
        }
      >
        <div className='flex flex-col items-center md:w-1/4 md:min-w-fit md:p-10'>
          {props.logos.map((logo, i) => (
            <Image
              key={i}
              className={
                'relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] ' +
                (logo.invert ? 'dark:invert' : '')
              }
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              priority
            />
          ))}
        </div>
        <>{props.children}</>
      </div>
    </>
  );
}
