import React from "react";
import Link from 'next/link';
import Navbar from "@/components/Layout/Navbar";
import SingleBlog from "@/components/Blog/SingleBlog";
import Footer from "@/components/Layout/Footer";

export default function singleblog() {
  return (
    <>
      <Navbar />

      <div className="page-banner-area mt-94" style={{ backgroundImage: `url(/images/page-banner/banner-bg-2.jpg` }}>
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Blog Details</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Blog Details</li>
            </ul>
          </div>
        </div>
      </div>

      <SingleBlog/>
  
      <Footer />
    </>
  );
}