import { type AppType } from 'next/dist/shared/lib/utils';

import { Footer, Header } from '~/components';
import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
