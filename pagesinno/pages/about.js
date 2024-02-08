import React from "react";
import Link from 'next/link';
import Navbar from "@/components/Layout/Navbar";
import WhoWeAre from "@/components/About/WhoWeAre";
import Partners from "@/components/Common/Partners";
import OurGoal from "@/components/About/OurGoal";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import Skills from "@/components/Common/Skills";
import PricingTable from "@/components/Pricing/PricingTable";
import ContactForm from "@/components/Common/ContactForm";
import Article from "@/components/Common/Article";
import Footer from "@/components/Layout/Footer";
import TeamMember from "@/components/Common/TeamMember";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="page-banner-area mt-94" style={{ backgroundImage: `url(/images/page-banner/banner-bg.jpg` }}>
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>About Us</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <WhoWeAre />

      <OurGoal />

      <div className="bg-with-F5F5F5-color">
        <Skills />
      </div>

      <TeamMember/>

      <ContactForm />

      <Footer />
    </>
  );
}
