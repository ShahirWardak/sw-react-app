import Image from 'next/image';
import ImageCard from './components/image-card';

export default function Home() {
  return (
    <ImageCard
      title='Shahir Wardak'
      image={{
        src: '/images/profile.jpg',
        alt: 'My profile picture',
      }}
      rounded={true}
      border={true}
    >
      <div className='mt-5 flex flex-col gap-5'>
        <p>
          I am a dedicated and passionate software developer with a BSc in
          Computer Science from Queen Mary University of London. My academic
          background has provided me with a solid foundation in software
          engineering, data structures, algorithms, and web development.
        </p>
        <p>
          Currently, I am contributing my skills at the RSPB, where I develop
          and maintain web applications that further the mission of saving
          nature. Utilizing technologies such as TypeScript, C#, and HTML, I
          focus on delivering accessible and engaging online experiences that
          bolster RSPB&apos;s digital presence. During my time as a frontend
          developer at IAmFlexi, I played a key role in a project designed to
          connect people with local jobs and workers, along with other
          small-scale projects like this one. This experience has honed my
          ability to create user-friendly and effective web applications.
        </p>
        <p>
          I am continuously seeking to learn new technologies and refine my
          expertise to grow as a developer and deliver impactful solutions.
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
