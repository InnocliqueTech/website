// pages/blog/[id].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   console.log("ID:", id);
  //   if (id) {
  //     fetch(`/api/blog/${id}`)
  //       .then(async (response) => {
  //         const fetchData = await response.json();
  //         console.log(fetchData);
  //         setBlogData(fetchData); // Update state with fetched data
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching blog data:", error);
  //       });
  //   }

   
  //   // Check authentication status
  //   const authToken = localStorage.getItem("token");
  //   setIsLoggedIn(!!authToken); // Set isLoggedIn to true if authToken exists
  // }, [id]);

  useEffect(() => {
    console.log("ID:", id);
    if (id) {
      axios.get(`/api/blog/${id}`)
        .then((response) => {
          const fetchData = response.data;
          console.log(fetchData);
          setBlogData(fetchData); // Update state with fetched data
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    }
  
    // Check authentication status
    const authToken = localStorage.getItem("token");
    setIsLoggedIn(!!authToken); // Set isLoggedIn to true if authToken exists
  }, [id]);
  
  const handleDeleteBlog = async () => {

    try {
      const response = await axios.delete(`/api/deleteblog/${id}`)
      console.log(response.data.message);
      router.push('/blog/blog')
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  }
  const htmlRender = (data) => {
    return <div>{data}</div>;
  };

  const handleEditBlog = async () => {
    router.push('/blog/editBlog')
    localStorage.setItem('blog', JSON.stringify(blogData?.blog))
  }
  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details-area pt-100 pb-100">
      <div className="container" style={{ width: "55%" }}>
        <div className="row">
          {/* <div className="col-lg-8 col-md-12"> */}
          <div className="col-lg-12 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                {
                  blogData.blog && blogData.blog.image ?
                    <img src={blogData.blog.image} alt="image" /> : ""
                }
              </div>

              <div style={{ fontStyle: 'italic', fontSize: "15px" }}>
                {new Date(blogData.blog.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>

              <div className="article-heading mt-2">
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

        </div>
      </div>
      <div>
        {isLoggedIn && (
          <div  className="container d-flex justify-content-end gap-2 mt-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleEditBlog}
            >
              Edit blog
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDeleteBlog}
            >
              Delete blog
            </button>
          </div>
        )}
      </div>
      <div className="container article-share">
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
  );
};

export default SingleBlog;