import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import Footer from "@/components/Layout/Footer";

export default function Gallery() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Gallery</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="gallery-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-1.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-3.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-4.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-5.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-6.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-7.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-8.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-9.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery-10.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
