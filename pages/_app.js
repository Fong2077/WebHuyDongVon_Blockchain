import "../styles/globals.css";

import { Footer, NavBar } from "../Components";
import { CrowdFundingProvider } from "../Context/CroudFunding";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CrowdFundingProvider>
        <NavBar></NavBar>

        <Component {...pageProps} />
        

        <Footer></Footer>
      </CrowdFundingProvider>
    </>
  );
}
