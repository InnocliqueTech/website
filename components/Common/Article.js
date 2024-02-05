import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import CreateBlog from "./CreateBlog";



const Article = ({ blogdata }) => {

  const truncateDescription = (description) => {
    const words = description.split(' ');
    const truncatedWords = words.length > 10 ? words.slice(0, 10).join(' ') + '...' : words.join(' ');

    return truncatedWords;
  };
  return (
    <>

      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>ARTICLE </span>
            <h2>
              <strong style={{ fontWeight: "400" }}>
                Read Our Blog To Get All Recent Tech
              </strong>{" "}
              News
            </h2>
            <CreateBlog />
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
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
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper blog-slides"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="800"
            data-aos-once="true"
          >
            {blogdata && blogdata.map((i) => (
              <SwiperSlide>
                <div className="blog-card">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="blog-image">
                        <Link href="/blog/single-blog">
                          <a>
                            <img src="/images/blog/blog-1.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="blog-content">
                        <div className="date">{i.date}</div>
                        <h3>
                          <Link href="/blog/single-blog">
                            <a>
                              {/* Revolutionizing Small Industries */}
                              {i.heading}
                            </a>
                          </Link>
                        </h3>
                        <p>
                         {truncateDescription(i.description)}
                          {/* In today's fast-paced business world, small industries across emerging markets such as the India, UAE, Africa, and Latin America are facing a new paradigm. */}
                        </p>

                        <Link href="/blog/single-blog">
                          <a className="blog-btn">View More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
           
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Article;
