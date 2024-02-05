import React from "react";
import Link from "next/link";


const AllServicesCardStyle2 = () => {
  return (
    <>
      <div className="services-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
            Tailored Solutions to Propel Your Business
            </h2>
            <p>
            At Innoclique, we offer a comprehensive suite of services designed to address the multifaceted needs of modern business.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/services/service-details">
                    <a>
                      <img src="/images/services/services-1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/service-details">
                      <a>Artificial Intelligence & Generative AI</a>
                    </Link>
                  </h3>
                  <p>
                  Harness the power of AI to automate processes, gain insights, and create new opportunities for growth
                  </p>
                  <Link href="/services/service-details">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/services/hyperautomationservice">
                    <a>
                      <img src="/images/services/services-2.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/hyperautomationservice">
                      <a>Hyper Automation</a>
                    </Link>
                  </h3>
                  <p>
                  Integrate advanced technologies like RPA, machine learning, and analytics to streamline operations and enhance efficiency.
                  </p>
                  <Link href="/services/hyperautomationservice">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/services/dataanalyticsservice">
                    <a>
                      <img src="/images/services/services-3.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/dataanalyticsservice">
                      <a>Data Analytics</a>
                    </Link>
                  </h3>
                  <p>
                  Turn data into actionable insights to make informed decisions, understand customer behavior, and drive strategic initiatives.
                  </p>
                  <Link href="/services/dataanalyticsservice">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/services/webandmobile">
                    <a>
                      <img src="/images/services/services-4.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/webandmobile">
                      <a>Web and Mobile App Dev</a>
                    </Link>
                  </h3>
                  <p>
                  In the critical sectors of healthcare and banking, where security and compliance are paramount...
                  </p>
                  <Link href="/services/webandmobile">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/services/endtoendinfra">
                    <a>
                      <img src="/images/services/services-5.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/endtoendinfra">
                      <a>End-to-End Infrastructure Services</a>
                    </Link>
                  </h3>
                  <p>
                  From setup to management, we handle all your infrastructure needs, ensuring..
                  </p>
                  <Link href="/services/endtoendinfra">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/services/strategicstaffingsol">
                    <a>
                      <img src="/images/services/services-6.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/services/strategicstaffingsol">
                      <a>Strategic Staffing Solutions</a>
                    </Link>
                  </h3>
                  <p>
                  Our approach to staffing is unique; we prioritize quality and long-term associations...
                  </p>
                  <Link href="/services/strategicstaffingsol">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/services-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AllServicesCardStyle2;
