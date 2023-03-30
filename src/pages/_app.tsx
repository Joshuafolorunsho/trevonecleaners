import { type AppType } from "next/dist/shared/lib/utils";
import { Header } from "~/components/Header";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;


{/* <meta charset="utf-8" />
<link rel="icon" href="%sveltekit.assets%/favicon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@600;700;900&family=Open+Sans:wght@400;600;700&display=swap"
  rel="stylesheet"
/> */}