import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100 border-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about/about.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>
                <strong style={{ fontWeight: '400' }}>Innovators and Strategists in the </strong>Technological Arena
                </h3>
                <p>
                  At Innoclique, we're more than just a technology firm; we're a dynamic team of innovators and strategists dedicated to redefining the way businesses interact with technology.
                </p>
                <p>
                  Our expertise spans from crafting cutting-edge solutions in AI, Hyper Automation, and Data Analytics to providing strategic staffing services that ensure you have the right talent to drive your projects forward. Each solution we offer is infused with our passion for excellence and our commitment to your success.
                </p>
                <p>
                  As partners in your technological journey, we're here to ensure that every step you take is a leap towards a more efficient and innovative future. Embark on this journey with us, and let's create lasting impact together.
                </p>
                <div className="about-btn">
                  <Link href="/about">
                    <a className="default-btn default-btn1">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img src="/images/about/about-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
