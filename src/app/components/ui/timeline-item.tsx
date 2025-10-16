import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

type itemType = {
  children: Readonly<React.ReactNode>;
  className?: string;
  url?: string;
  title?: string;
  description?: string;
  skillsList?: string[];
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

export default function TimelineItem(props: itemType) {
  return (
    <>
      <div
        className={
          'border-solid border-neutral-200 p-5 shadow-[-18px_24px_0px_2px_#000000] ring ring-neutral-800 dark:border-neutral-800 ' +
          props.className
        }
      >
        <h2 className='flex items-center gap-3 text-4xl font-bold text-neutral-800 dark:text-neutral-300'>
          <span>{props.title}</span>
          {props.url && (
            <a href={props.url} target='_blank'>
              <ExternalLink color='skyblue' size={40} />
            </a>
          )}
        </h2>
        <p className='mb-3 mt-3 font-normal text-neutral-800 dark:text-neutral-300'>
          {props.description}
        </p>
        <ul className='mb-5 list-inside list-disc font-semibold text-neutral-800 dark:text-neutral-300'>
          {props.skillsList &&
            props.skillsList.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
        <div className='grid grid-cols-2 items-center justify-items-center gap-4'>
          {props.images &&
            props.images.map((image, i) => (
              <Image
                key={i}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            ))}
        </div>
        <div className='justify-items-center'>{props.children}</div>
      </div>
    </>
  );
}
