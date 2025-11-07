import { useIsVisible, useIsVisible2 } from '@/lib/visible-hook';

type Section = {
  id: string;
  label: string;
  ref: React.RefObject<HTMLElement>;
};

interface StickyNavProps {
  sections: Section[];
}

export default function StickyNav({ sections }: StickyNavProps) {
  const isVisible = useIsVisible(sections[1].ref);
  const isVisible2 = useIsVisible2(sections);

  function handleClick(ref: React.RefObject<HTMLElement>) {
    console.log(ref);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='sticky top-0 z-50 flex justify-between gap-5 bg-neutral-800 p-5 font-bold shadow-[0px_8px_10px_2px_#000000] lg:justify-end lg:gap-10 lg:px-20 lg:text-lg'>
      {sections.map((item) => (
        <a
          key={item.id}
          onClick={() => handleClick(item.ref)}
          className={
            isVisible2 === item.id
              ? 'cursor-pointer text-cyan-500 transition-colors'
              : 'cursor-pointer transition-colors'
          }
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
