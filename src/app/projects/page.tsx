import Container from '../components/container';
import LogoText from '../components/logo-text';

export default function Dashboard() {
  return (
    <main className='mt-28 flex flex-col items-center justify-between'>
      <h1 className='text-5xl font-semibold'>PROJECTS</h1>
      <div className='relative flex place-items-center'>
        <Container>
          <h1 className='text-4xl font-semibold'>RSPB</h1>
          <LogoText
            logos={[
              {
                src: '/images/rspb-logo.png',
                alt: 'RSPB Logo',
                width: 150,
                height: 50,
              },
            ]}
          >
            <ul className='mt-5 list-inside list-disc'>
              <li>Test longer text</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </LogoText>
        </Container>
      </div>
    </main>
  );
}
