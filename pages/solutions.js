import React from "react";
import Link from "next/link";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import AllSolutionsCard from "@/components/Solutions/AllSolutionsCard";

export default function solutions() {
  return (
    <>
      <Navbar />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/solutions-bg.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Solutions</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Solutions</li>
            </ul>
          </div>
        </div>
      </div>
  
      <AllSolutionsCard />

      <ContactForm />

      <Footer />
    </>
  );
}
