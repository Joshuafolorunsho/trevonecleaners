import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Button, FAQ, LinkButton, MeetTeamCard, Services, Testimonials, Title } from '~/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trevone Nigeria | Best Cleaning agency</title>
        <meta name="description" content="Best cleaning agency" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <>
        <section
          style={{ backgroundImage: "url('/assets/home-hero.png')" }}
          className="h-[calc(100vh-96px)] bg-cover bg-no-repeat text-white"
        >
          <div className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center p-16 px-5 text-center sm:px-10 md:px-0">
            <h1 className="font-lato text-5xl font-black">
              Making Your <span className="text-primary-100">Space</span> Spotless with Expert
              Cleaning Solutions.
            </h1>
            <p className="my-6 text-2xl font-medium">
              At Trevone, we believe that a clean space is a happy space. That's why we offer a wide
              range of cleaning services to help keep your home or office looking its best.
            </p>
            <div className="flex items-center space-x-5">
              <Button>Book us online now</Button>
              <LinkButton href="/" className="text-white" variant="outline">
                Learn more about us
              </LinkButton>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-10 sm:py-16">
          <div className="container mx-auto">
            <Title subTitle="Benefit from our top-notch cleaning services that leave you satisfied.">
              Experience complete satisfaction with our exceptional cleaning services.
            </Title>
            <Services />
          </div>
        </section>

        <section className="bg-primary-200 py-10 sm:py-16">
          <div className="container mx-auto">
            <Title subTitle="Testimonials">
              Endorsed by <span className="text-primary-300">clients</span> who are proud of the{' '}
              <span className="text-primary-300">quality</span> of Trevone services.
            </Title>
            <Testimonials />
          </div>
        </section>

        <FAQ />
        <MeetTeamCard />
      </>
    </>
  );
};

export default Home;
