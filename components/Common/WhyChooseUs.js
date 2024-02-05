import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>WHY CHOOSE US</span>
            <h2>
              Innovating Beyond Boundaries
            </h2>
            <p>
              Choose Innoclique for transformative solutions that merge cutting-edge technology with strategic foresight, ensuring your business is not just prepared for the future but actively shaping it.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/service-details">
                    <a>
                      <img src="/images/choose/choose-1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/service-details">
                      {/* <a>Mobile Apps</a> */}
                      <a>Innovative & Forward-Thinking</a>
                    </Link>
                  </h3>
                  <p>
                    {/* Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eirm od tempor invidunt ut labore. */}
                    At Innoclique, innovation is not just a buzzword; it's our ethos. We continuously evolve, ensuring you're always several steps ahead.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/service-details">
                    <a>
                      <img src="/images/choose/choose-1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/service-details">
                      {/* <a>Branding Strategy</a> */}
                      <a>Solution-Oriented & Reliable</a>
                    </Link>
                  </h3>
                  <p>
                  We don't just identify problems; we craft solutions. Our team is dedicated to providing reliable, effective strategies that drive your business forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/service-details">
                    <a>
                      <img src="/images/choose/choose-3.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/service-details">
                      {/* <a>Graphic Design</a> */}
                      <a>Approachable & Professional</a>
                    </Link>
                  </h3>
                  <p>
                  While we're experts in technology, we speak your language. Our team is here to guide you through the complexities of digital transformation in a friendly, approachable manner.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/service-details">
                    <a>
                      <img src="/images/choose/choose-4.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/service-details">
                      <a>Search Optimization</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eirm od tempor invidunt ut labore.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Shape Images */}
        <div className="choose-shape-1">
          <img src="/images/choose/choose-shape.png" alt="image" />
        </div>
        <div className="choose-shape-2">
          <img src="/images/choose/choose-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
