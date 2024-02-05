import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import { Autoplay } from "swiper";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <>
      <div className="main-slides-area">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper home-slides"
        >
          <SwiperSlide>
            <div className="main-slides-item">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="main-slides-content">
                      <h1
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <strong style={{ fontWeight: '400' }}>Transform Your Business with the</strong> Power of AI & Hyper Automation
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        Embrace innovation and redefine your operational efficiency. 
                        Together, let's build a future that's driven by intelligence and automation. 
                      </p>

                      <div
                        className="slides-btn"
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <Link href="/contact">
                          <a className="default-btn">
                          Discover Innovation 
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-5 col-md-12"
                    data-aos="fade-down"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <div className="main-slides-image">
                      <img src="/images/Banner/BanImg1.png" alt="BanImg1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="main-slides-item">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="main-slides-content">
                      <h1
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <strong style={{ fontWeight: '400' }}>Unleash Potential, Drive Growth with</strong> Cutting-Edge Technology Solutions
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        Discover the path to unparalleled success with our solutions. 
                        Innovate, evolve, and excel with our partnership guiding you every step of the way.
                      </p>

                      <div
                        className="slides-btn"
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <Link href="/contact">
                          <a className="default-btn">
                          Get Started Today 
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-5 col-md-12"
                    data-aos="fade-down"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <div className="main-slides-image">
                      <img src="/images/Banner/BanImg2.png" alt="BanImg2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="main-slides-item">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="main-slides-content">
                      <h1
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <strong style={{ fontWeight: '400' }}>Empowering Your Business with</strong> Affordable, Advanced Tech Solutions
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        Your one-stop partner for all IT needs; your challenges, our innovative solutions. 
                        Benefit from infrastructure and maintenance services with a 
                        monthly fee and no substantial initial costs, all at 50% less 
                        infrastructure expense than any cloud provider. 
                      </p>

                      <div
                        className="slides-btn"
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <Link href="/contact">
                          <a className="default-btn">
                          Explore Our Services 
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-5 col-md-12"
                    data-aos="fade-down"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <div className="main-slides-image">
                      <img src="/images/Banner/BanImg3.png" alt="BanImg3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="main-slides-item">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="main-slides-content">
                      <h1
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <strong style={{ fontWeight: '400' }}>Maximize Efficiency with</strong> Our Infra + Dev Solutions
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        Streamline your operations and reduce costs with our integrated Infrastructure
                         and Development solutions. Experience unparalleled efficiency and performance 
                         at 50% less cost than traditional providers. 
                      </p>

                      <div
                        className="slides-btn"
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <Link href="/contact">
                          <a className="default-btn">
                          Achieve More for Less 
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-5 col-md-12"
                    data-aos="fade-down"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <div className="main-slides-image">
                      <img src="/images/Banner/BanImg4.png" alt="BanImg4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
        </Swiper>

        {/* Shape Images */}
        <div className="main-slides-shape-1">
          <img 
            src="/images/home-slides/slides-shape-1.png" 
            alt="image" 
          />
        </div>
        <div className="main-slides-shape-2">
          <img 
            src="/images/home-slides/slides-shape-2.png" 
            alt="image" 
          />
        </div>
        <div className="main-slides-shape-3">
          <img 
            src="/images/home-slides/slides-shape-3.png" 
            alt="image" 
          />
        </div>
        <div className="main-slides-shape-4">
          <img 
            src="/images/home-slides/slides-shape-4.png" 
            alt="image" 
          />
        </div>
        <div className="main-slides-shape-5">
          <img 
            src="/images/home-slides/slides-shape-5.png" 
            alt="image" 
          />
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
