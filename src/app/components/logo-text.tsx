import Image from 'next/image';
import { LogoTextType } from '../types/logo-text.types';

export default function LogoText(props: LogoTextType) {
  return (
    <>
      <div
        className={
          'mt-10 flex flex-col items-center lg:mt-0 ' +
          (props.alignment === 'reverse'
            ? 'lg:flex-row-reverse'
            : 'lg:flex-row') +
          ' ' +
          props.justify
        }
      >
        <div className='flex flex-col items-center lg:w-1/4 lg:min-w-fit xl:p-10'>
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
        {props.logosAfter ? (
          <div className='mt-5 flex flex-col items-center lg:mt-0 xl:w-1/4 xl:min-w-fit xl:p-10'>
            {props.logosAfter?.map((logo, i) => (
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
        ) : null}
      </div>
    </>
  );
}
