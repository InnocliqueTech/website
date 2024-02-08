import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import ServicesDetailsContent from "@/components/Services/ServicesDetailsContent";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
// import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";

export default function ServiceDetails() {
  return (
    <>
      <Navbar />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Services Details</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li> 
                <Link href="/services/services-2">
                  <a>Services</a>
                </Link>
                </li>
              <li>AI</li>
            </ul>
          </div>
        </div>
      </div>

      <ServicesDetailsContent />

      <ContactForm />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      {/* <CTO /> */}

      <Footer />
    </>
  );
}
