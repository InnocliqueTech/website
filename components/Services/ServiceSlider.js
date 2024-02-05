import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <>
      <div className="services-area with-radius ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span style={{ color: '#ffffff' }}>SERVICES</span>
                <h3>
                  <strong  style={{ fontWeight: '400' }}>Tailored Solutions to </strong> Propel Your Business
                </h3>
                <p>
                At Innoclique, we offer a comprehensive suite of services 
                designed to address the multifaceted needs of modern businesses. 
                From innovative technology solutions to strategic staffing, each service we 
                provide is aimed at enhancing your operations and driving your business forward.
                </p>
                <div className="services-section-btn">
                  <Link href="/services/services-2">
                    <a className="default-btn">Explore All Services</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={100}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper services-slides"
              >
                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/service-details">
                        <a>
                          <img
                            src="/images/services/services-1.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/service-details">
                          <a> Technology Innovation & Development</a>
                        </Link>
                      </h3>
                      <p>
                        <i>Pioneering with Precision</i>- Explore the frontier of
                        technology with our AI, automation, and custom software
                        solutions.
                      </p>
                      <Link href="/services/service-details">
                        <a className="services-btn">Innovate Today</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/service-details">
                        <a>
                          <img
                            src="/images/services/services-2.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/service-details">
                          <a>Strategic IT Consulting & Solutions</a>
                        </Link>
                      </h3>
                      <p>
                        <i>Navigating Complexity, Delivering Clarity</i>- Our
                        strategic consulting and comprehensive solutions
                        demystify the complexities of IT.
                      </p>
                      <Link href="/services/service-details">
                        <a className="services-btn">Strategize Now</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/service-details">
                        <a>
                          <img
                            src="/images/services/services-3.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/service-details">
                          <a>Comprehensive Staffing & Talent Management</a>
                        </Link>
                      </h3>
                      <p>
                        <i>Empower Your Team, Elevate Your Potential</i>- Bridge the
                        talent gap with our strategic staffing and team
                        extension services.
                      </p>
                      <Link href="/services/service-details">
                        <a className="services-btn">Enhance Your Team</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/service-details">
                        <a>
                          <img
                            src="/images/services/services-4.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/service-details">
                          <a>Cost-Effective Managed Services</a>
                        </Link>
                      </h3>
                      <p>
                        <i>Efficiency Enhanced, Costs Contained</i>- Embrace
                        operational excellence with our managed services.
                      </p>
                      <Link href="/services/service-details">
                        <a className="services-btn">Optimize Now</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
