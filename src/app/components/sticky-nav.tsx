type Section = {
  id: string;
  label: string;
  ref: React.RefObject<HTMLElement>;
};

interface StickyNavProps {
  sections: Section[];
}

export default function StickyNav({ sections }: StickyNavProps) {
  function handleClick(ref: React.RefObject<HTMLElement>) {
    console.log(ref);
  }

  return (
    <div className='sticky top-0 z-50 flex justify-end gap-5 bg-neutral-800 p-5 px-20 text-lg font-bold shadow-[0px_8px_10px_2px_#000000]'>
      {sections.map((item) => (
        <a key={item.id} onClick={() => handleClick(item.ref)}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
