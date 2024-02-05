import React from "react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-100 d-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-section-content"
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>TESTIMONIALS</span>
                <h3>
                  Some <b>Sweet Talk</b> Of Our Happy Clients
                </h3>
                <p>
                  We are leading technology solutions providing company all over
                  the world doing over 40 years lorem ipsum dolor sit amet.
                </p>
                <p>
                  We are leading technology solutions providing company all over
                  the world doing over 40 years. lorem ipsum dolor sit amet
                  consetetur.
                </p>

                <div className="testimonials-btn">
                  <Link href="/about">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-item"
                data-aos="fade-left"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadips cin go elitr
                    sed diam nonumy eirmod.
                  </p>
                  <h4>
                    Herry Hopper, <span>Solit Team</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadips cin go elitr
                    sed diam nonumy eirmod.
                  </p>
                  <h4>
                    Daniel John, <span>Spix Team</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="/images/testimonials/testimonials-3.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadips cin go elitr
                    sed diam nonumy eirmod.
                  </p>
                  <h4>
                    Zinnia, <span>Stax Team</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialsbg-shape">
          <img src="/images/testimonials/testimonials-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
