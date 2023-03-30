import { type AppType } from 'next/dist/shared/lib/utils';
import { Lato, Open_Sans } from '@next/font/google';

import { Header } from '~/components';
import '~/styles/globals.css';

const openSans = Open_Sans({
  subsets: ['latin']
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />

      <style jsx global>
        {`
          :root {
            --workSans-font: ${openSans.style.fontFamily};
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
