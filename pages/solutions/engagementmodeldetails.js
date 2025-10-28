import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
import Footer from "@/components/Layout/Footer";
import EngagementModelContent from "@/components/Solutions/EngagementModelContent";


export default function engagementmodeldetails() {
  return (
    <>
      <Navbar />
      <div className="page-banner-area mt-94" >
        <div className="container bancontainer">
          <div className="content-left">
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
                  <li>Engagement Model</li>
                </ul>
            </div>
          </div>
          
          <div className="banner-image col-md-8">
            <img src="/images/SolutionDetails/SolutionDetails.png" />
          </div>
          
        </div>
      </div>


      
      <EngagementModelContent/>

      <ContactForm />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      {/* <CTO /> */}

      <Footer />
    </>
  );
}
