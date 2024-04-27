import Image from 'next/image';
import ImageCard from './components/image-card';

export default function Home() {
  return (
    <ImageCard
      title='Shahir Wardak'
      image={{ url: '/images/profile.jpg', alt: 'My profile picture' }}
      rounded={true}
      border={true}
    >
      <div className='flex flex-col gap-5'>
        <p>
          A dedicated and hard-working individual with a strong passion for
          programming. I graduated from Queen Mary University of London with a
          BSc in Computer Science, where I learned the fundamentals of software
          engineering, data structures, algorithms, and web development. I also
          gained valuable experience as a frontend developer for IAmFlexi, a
          project that aimed to help people find local jobs or workers as well
          as other small projects such as this one. I am always eager to learn
          new technologies and improve my skills as a developer.
        </p>
        <p>
          Since then, I have picked up many valuable skills through my years in
          RSPB where I have contributed to the creation and maintenance of web
          applications that support the charity mission of saving nature. I work
          with TypeScript, C# and HTML to deliver user-friendly and accessible
          features that enhance the online presence and engagement of RSPB.
        </p>
      </div>

      <div className='my-5 flex justify-center gap-10'>
        <a href='https://github.com/ShahirWardak' target='_blank'>
          <Image
            className='invert'
            src='/svg/github.svg'
            alt='GitHub Logo'
            width={40}
            height={20}
            priority
          />
        </a>

        <a href='https://www.linkedin.com/in/shahir-wardak/' target='_blank'>
          <Image
            src='/svg/linkedin.svg'
            alt='LinkedIn Logo'
            width={40}
            height={20}
            priority
          />
        </a>
      </div>
    </ImageCard>
  );
}
