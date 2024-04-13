import ImageCard from './components/image-card';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <div className='relative flex place-items-center'>
        <ImageCard
          title='SW React App'
          image={{ url: '/profile.jpg', alt: 'My profile picture' }}
          text='Welcome to my first React application'
        />
      </div>
    </main>
  );
}
