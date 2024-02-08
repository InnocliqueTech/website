import React from "react";
import Link from "next/link";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

const team1 = () => {
  return (
    <>
    <Navbar />
    <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/team-banner.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Team</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Team</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>TEAM MEMBER</span>
            <h2>
            Our Leadership Team
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12">
            <div className="talk-image">
                <img src="/images/talk/team-2.png" alt="RAM" />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div class="career-content">
                <h3>Rambabu Gandla, COO</h3>
                <p>Ram with more than 24 years of experience in Enterprise Solutions and Architecture, 
                  Ram is a skilled and results-driven person with a proven track record of driving 
                  successful technology initiatives across a variety of industries. He played a critical 
                  role in setting up two startups from the ground up alongside NK over the last decade.</p>
                <p>Ram is highly proficient in Microsoft technologies, cloud computing, and DevOps, and 
                  has a demonstrated ability to deliver high-quality products and enforce sound product 
                  engineering practices. He has led and mentored successful technology teams across various 
                  organizations and has experience delivering advanced technology systems, solutions, 
                  architecture, and applications.</p>
                  <p>Ram's leadership style is a strong commitment to collaboration, quality, and continuous
                     improvement. He has extensive expertise in cloud-based architectures and DevOps 
                     methodologies, which enable his teams to rapidly develop, deploy, and scale applications
                      with exceptional efficiency and reliability. Additionally, he excels at developing 
                      technology roadmaps that align with business objectives, driving technical innovation, 
                      and leading enterprise-scale technology transformations</p>
              </div>
            </div>

          </div>
        </div>

        {/* Shape Image */}
        <div className="pricing-bg-shape-1">
          <img src="/images/pricing/pricing-bg-shape.png" alt="image" />
        </div>
        <div className="pricing-shape-1">
          <img src="/images/pricing/pricing-shape-1.png" alt="image" />
        </div>
        <div className="pricing-shape-2">
          <img src="/images/pricing/pricing-shape-2.png" alt="image" />
        </div>
      </div>

      <ContactForm />

      <Footer />
    </>
  );
};

export default team1;
