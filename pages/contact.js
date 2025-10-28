import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Layout/Navbar'
import CTO from '@/components/Common/CTO'
import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Layout/Footer'
import GoogleMap from '@/components/Common/GoogleMap'

export default function Contact() {
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
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>Contact</li>
                  </ul>
            </div>
          </div>
          
          <div className="banner-image col-md-8">
            <img src="/images/footer/Contact.png" />
          </div>
          
        </div>
      </div>



      <GoogleMap />
      {/* <CTO /> */}

      <ContactForm />

      <Footer />
    </>
  )
}
