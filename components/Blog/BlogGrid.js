import React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"


const BlogGrid = () => {
  const [blogdata, setBlogData] = useState([])

  useEffect(() => {
    axios.get('/api/getblogs')
      .then(response => {
        const activeBlogs = response.data.blogsData.filter(blog => !blog.deleted);
        console.log(response.data.blogsData);
        // setBlogData(response.data.blogsData);
        setBlogData(activeBlogs);
        console.log(blogdata, "blogData with state");
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);



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

  const truncateDescription = (description) => {
    const words = description && description.split(' ');
    const truncatedWords = words && words.length > 10 ? words.slice(0, 10).join(' ') + '...' : (words || []).join(' ');

    return truncatedWords;
  };
  return (
    <>
      <div className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>ARTICLE</span>
            <h2>
              Read Our Blog To Get All Recent Tech <b>News</b>
            </h2>
          </div>

          <div className="row justify-content-center">
            {blogdata && blogdata.map((blog) => (
              <div className="col-lg-6 col-md-12">
                <div
                  className="blog-card"
                  data-aos="fade-up"
                  data-aos-delay="890"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="blog-image">
                        <Link href="/blog/[id]" as={`/blog/${encodeURIComponent(blog._id)}`}>
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
                        <div className="date"  >
                          {new Date(blog.updatedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <h3>
                          <Link href="/blog/[id]" as={`/blog/${encodeURIComponent(blog._id)}`}>
                            <a>{blog.heading}</a>
                          </Link>
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: extractFirst10Words(blog.description),
                          }}
                        />
                        <Link href="/blog/[id]" as={`/blog/${encodeURIComponent(blog._id)}`}>
                          <a className="blog-btn">View More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-shape-1">
          <img src="/images/blog/blog-shape-1.png" alt="image" />
        </div>
      </div>
    </>
  )
}

export default BlogGrid