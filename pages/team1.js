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
                <img src="/images/talk/team-1.png" alt="NK" />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div class="career-content">
                <h3>NK Changalasetti, CEO</h3>
                <p>Boasts over 23 years of experience in product development, with a strong technical background focused on product 
                  research and development, enterprise solutions. Successfully established two offshore development centres from the 
                  ground up, spearheading the development of multiple product lines and driving their market success. NK excels in building 
                  high-performing teams, played a critical role in growing QSSI INC, US offshore delivery center from a team of 5 to 120+ in 
                  less than a year, and later merging with Optum Global Solutions (a United Health Group company). </p>
                <p>Proven successful track record as Business Unit Head, strong experience in managing business of volume $100M and above, ensuring 
                  best technical solutions designed for performance, reliability, scalability, maintainability, supportability, business continuity, 
                  and business agility while leveraging industry's best practices. Well-honed Business Planning qualities, Design IT Blueprints & Roadmap,
                   Global IT Delivery & Operational Readiness, Internal Consulting, Privacy & Security Compliance, Budget Management, Cost of Quality, Cost Control, 
                   IT Governance, Team Transformations and Industry's Best Practices.</p>
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
