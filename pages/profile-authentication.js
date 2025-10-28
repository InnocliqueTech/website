import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Layout/Navbar'
import CTO from '@/components/Common/CTO'
import Footer from '@/components/Layout/Footer'
import Authentication from '@/components/Authentication/Authentication';

export default function ProfileAuthentication() {
  return (
    <>
      <Navbar />

      {/* <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Profile Authentication11</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Profile Authentication</li>
            </ul>
          </div>
        </div>
      </div> */}

      
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
              <h2>Authentication</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Authentication</li>
            </ul>
            </div>
          </div>
          
          <div className="banner-image col-md-8">
            <img src="/images/Blog-Login.png" />
          </div>
          
        </div>
      </div>

      <Authentication />

      <CTO />

      <Footer />
    </>
  )
}
