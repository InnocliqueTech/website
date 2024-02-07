import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
import Footer from "@/components/Layout/Footer";
import TechInnoDevContent from "@/components/Solutions/TechInnoDevContent";

export default function techinnodevdetails() {
  return (
    <>
      <Navbar />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/solutions/solutions-ban.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Solutions Details</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
              <Link href="/solutions">
                  <a>Solutions</a>
                </Link>
                </li>
              <li>Tech Inno Dev</li>
            </ul>
          </div>
        </div>
      </div>

      
      <TechInnoDevContent/>

      <ContactForm />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      {/* <CTO /> */}

      <Footer />
    </>
  );
}
