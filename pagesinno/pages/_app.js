import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
// Navbar CSS
import "../styles/navbar.css";
// Footer CSS
import "../styles/footer.css";
// Globals CSS
import "../styles/globals.css";
// Responsive CSS
import "../styles/responsive.css";
// RTL CSS
import "../styles/rtl.css";
import "../styles/rtl-sidebar.css";

import Head from "next/head";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import RtlSidebar from "@/components/Layout/RtlSidebar";


function MyApp({ Component, pageProps }) { // Cannot find module 'sass'
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>
          INNOCLIQUE
        </title>
        <meta 
          name="viewport" 
          content="initial-scale=1.0, width=device-width" 
        />
      </Head>

      <Component {...pageProps} />

      <RtlSidebar />

      <ScrollToTop />
    </>
  );
}

export default MyApp;
