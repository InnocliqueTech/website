import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import CreateBlog from "./CreateBlog";



const Article = ({ blogdata }) => {

  // const truncateDescription = (description) => {
  //   const words = description && description.split(' ');
  //   const truncatedWords =words && words.length > 10 ? words.slice(0, 10).join(' ') + '...' : words.join(' ');

  //   return truncatedWords;
  // };

  const truncateDescription = (description) => {
    const words = description && description.split(' ');
    const truncatedWords = words && words.length > 10 ? words.slice(0, 10).join(' ') + '...' : (words || []).join(' ');

    return truncatedWords;
  };
  const extractFirst10Words = (htmlString) => {
    // Extract text content from HTML string
    const text = new DOMParser().parseFromString(htmlString, 'text/html').documentElement.textContent;

    // Split text into words
    const words = text.trim().split(/\s+/);

    // Extract the first 10 words
    const first10Words = words.slice(0, 10).join(' ');

    // Wrap the first 10 words in a <div> to maintain HTML formatting
    return `<div>${first10Words}</div>`;
  };

  return (
    <>

      <div className="blog-area pt-100 pb-75">
        <div className="container ">
          <div className="section-title">
            <span>ARTICLE </span>
            <h2>
              <strong style={{ fontWeight: "400" }}>
                Read Our Blog To Get All Recent Tech 
              </strong>{" "}
              News
            </h2>
            {/* <CreateBlog /> */}
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
            {blogdata && blogdata.map((blog) => (
              <SwiperSlide>
                <div className="blog-card">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="blog-image">
                        <Link href="/blog/[id]" as={`/blog/${encodeURIComponent(blog._id)}`}>
                          {/* <a>
                            <img src="/images/blog/blog-1.jpg" alt="image" />
                          </a> */}
                          <div className="article-image">
                            {
                              blog && blog.image ?
                                <img src={blog.image} alt="image" /> : ""
                            }
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="blog-content">
                        <div className="date">
                          {new Date(blog.updatedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <h3>
                          <Link href="/blog/[id]" as={`/blog/${encodeURIComponent(blog._id)}`}>
                            <a>
                              {/* Revolutionizing Small Industries */}
                              {blog.heading}
                            </a>
                          </Link>
                        </h3>

                        <div
                          dangerouslySetInnerHTML={{
                            // __html: blog.description,
                            __html: extractFirst10Words(blog.description),
                          }}
                        />
                        {/* <p>
                         {truncateDescription(i.description)}
                         
                        </p> */}

                        {/* <Link href="/blog/single-blog"> */}
                        <Link href="/blog/[id]" as={`/blog/${encodeURIComponent(blog._id)}`}>
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
