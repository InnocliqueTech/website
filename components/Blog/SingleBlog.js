// pages/blog/[id].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SingleBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    console.log("ID:", id);
    if (id) {
      fetch(`http://localhost:3000/api/blog/${id}`)
        .then(async (response) => {
          const fetchData = await response.json();
          console.log(fetchData);
          setBlogData(fetchData); // Update state with fetched data
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    }
  }, [id]);

  const htmlRender = (data) => {
    return <div>{data}</div>;
  };

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-8 col-md-12"> */}
          <div className="col-lg-12 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <img src="/images/blog-details/blog-details.jpg" alt="image" />
              </div>

              <div className="article-heading">
                {blogData.blog && blogData.blog.heading && (
                  <h1>{blogData.blog.heading}</h1>
                )}
              </div>
              <div className="article-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogData.blog.description,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="article-share">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="share-content">
                  <h4>Share The Article:</h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="share-social text-end">
                  <li>
                    <a
                      href="https://www.facebook.com/EnvyTheme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-youtube-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vimeo.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-vimeo-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;