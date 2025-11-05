import Image from 'next/image';

type Items = {
  name: string;
  icon: string;
  iconAlt?: string;
  invertIcon?: boolean;
};

export default function SkillIconsList(props: { items: Items[] }) {
  return (
    <>
      <div className='flex flex-col justify-center gap-5'>
        {props.items.map((item, i) => (
          <div
            key={i}
            className='flex flex-col items-center justify-between rounded-lg border-2 border-zinc-100 p-2 shadow-md shadow-zinc-500/50 lg:h-28 lg:w-44'
          >
            <Image
              className={
                'relative h-[60px] min-w-fit ' +
                (item.invertIcon ? 'dark:invert' : '')
              }
              src={item.icon}
              alt={item.iconAlt ?? ''}
              width={60}
              height={60}
              priority
            />
            <span className='text-md font-bold'>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
