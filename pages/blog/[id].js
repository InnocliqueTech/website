import React from "react";
import Link from 'next/link';
import Navbar from "@/components/Layout/Navbar";
import SingleBlog from "@/components/Blog/SingleBlog";
import Footer from "@/components/Layout/Footer";

export default function singleblog() {
  return (
    <>
      <Navbar />

      <div className="page-banner-area mt-94" >
        <div className="container bancontainer">
          <div className="content-left">
            <div
              className="page-banner-content"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
               <h2>Blog</h2>
                <ul>
                  <li>
                    <Link href="/blog/blog">
                      <a>Blogs list</a>
                    </Link>
                  </li>
                  <li>Blog</li>
                </ul>
            </div>
          </div>
          
          <div className="banner-image col-md-8">
            <img src="/images/blog-details/Ban-Blog.png" />
          </div>
          
        </div>
      </div>

      <SingleBlog/>
  
      <Footer />
    </>
  );
}