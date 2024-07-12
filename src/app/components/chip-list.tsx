export default function ChipList(props: { items: String[] }) {
  return (
    <>
      {props.items.map((item, i) => (
        <div
          key={i}
          className='m-1 inline-block rounded-md border-2 border-discord-100 bg-discord-600 p-2 px-4'
        >
          {item}
        </div>
      ))}
    </>
  );
}
