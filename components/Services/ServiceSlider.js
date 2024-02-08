import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <>
      <div className="services-area with-radius ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span style={{ color: '#ffffff' }}>SOLUTIONS</span>
                <h3>
                  <strong  style={{ fontWeight: '400' }}>Transformative Solutions for </strong> Unparalleled Growth 
                </h3>
                <p>
                Innoclique's suite of solutions is strategically designed to empower your business 
                with the tools needed for sustainable growth and efficiency. Our approach focuses on 
                understanding your unique challenges and opportunities, delivering solutions that 
                transcend traditional service offerings.
                </p>
                <div className="services-section-btn">
                  <Link href="/solutions">
                    <a className="default-btn">Explore All Solutions</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
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
                    slidesPerView: 2,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper services-slides"
              >
                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/solutions/techinnodevdetails">
                        <a>
                          <img
                            src="/images/solutions/solutions-1.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/solutions/techinnodevdetails">
                          <a> Technology Innovation & Development</a>
                        </Link>
                      </h3>
                      <p>
                        <i>Empowering Progress with Cutting-Edge Solutions</i>- Our service goes beyond mere development; it's 
                        about pioneering solutions that transform business challenges into opportunities for growth and 
                        innovation.
                      </p>
                      <Link href="/solutions/techinnodevdetails">
                        <a className="services-btn">Innovate Today</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/solutions/strategicitconsdetails/">
                        <a>
                          <img
                            src="/images/solutions/solutions-2.jpg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/solutions/strategicitconsdetails/">
                          <a>Strategic IT Consulting & Solutions</a>
                        </Link>
                      </h3>
                      <p>
                        <i>Crafting Your Roadmap to Technological Excellence</i>- We provide clarity and strategic direction 
                        in the complex IT landscape, aligning technology with your business goals for optimized 
                        performance and investment.
                      </p>
                      <Link href="/solutions/strategicitconsdetails/">
                        <a className="services-btn">Strategize Now</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

               

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/solutions/costeffectivedetails/">
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
                        <Link href="/solutions/costeffectivedetails/">
                          <a>Cost-Effective Managed Services</a>
                        </Link>
                      </h3>
                      <p>
                        <i>Optimizing Operations While Reducing Costs</i>- Our managed services offer a balance of operational excellence and cost efficiency, 
                        rivaling top-tier providers at a significantly reduced cost.
                      </p>
                      <Link href="/solutions/costeffectivedetails/">
                        <a className="services-btn">Optimize Now</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/solutions/engagementmodeldetails">
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
                        <Link href="/solutions/engagementmodeldetails">
                          <a>Engagement Models Designed for Your Success</a>
                        </Link>
                      </h3>
                      <p>
                        Our flexible engagement models are tailored to meet the unique needs and preferences of your projects, ensuring a partnership that aligns with your business objectives.
                        
                      </p>
                      <Link href="/solutions/engagementmodeldetails">
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
