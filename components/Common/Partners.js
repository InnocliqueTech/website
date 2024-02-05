import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Partners = () => {
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper partner-slides"
          >
            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  {/* <img src="/images/partner/partner-1.png" alt="partner" /> */}
                  <img src="../images/Logos/Cognitive.jpg" alt="Cognitive" />
                  {/* <img src="/images/partner/partner-hover-1.png" alt="partner" /> */}
                </a>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                <img src="../images/Logos/Peduba.jpg" alt="Peduba" />
                  {/* <img src="/images/partner/partner-2.png" alt="partner" />
                  <img src="/images/partner/partner-hover-2.png" alt="partner" /> */}
                </a>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="../images/Logos/Infinite.jpg" alt="Infinite" />
                  {/* <img src="/images/partner/partner-3.png" alt="partner" />
                  <img src="/images/partner/partner-hover-3.png" alt="partner" /> */}
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="../images/Logos/Inteq.jpg" alt="Inteq" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="../images/Logos/Marvel.jpg" alt="Inteq" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="../images/Logos/Oxyloans.jpg" alt="Oxyloans" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="../images/Logos/Ameya.jpg" alt="Ameya" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="../images/Logos/NFC.jpg" alt="NFC" />
                </a>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
