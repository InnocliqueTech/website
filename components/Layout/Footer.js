import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-area with-black-background pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="widget-logo">
                  <Link href="/">
                    <a>
                      <img src="/images/logo.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <p>
                Innoclique: Your partner in technological evolution. Together, let's redefine the boundaries of what's possible
                </p>
                <ul className="widget-social">
                  {/* <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/company/innoclique-congitive-technologies-pvt-ltd/posts/?feedView=all"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h3>Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/#">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <h3>Pages</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">
                      <a>Terms of Service</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                  className="single-footer-widget ps-5"
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <h3>Contact Us</h3>
                  <strong className="text-white">Head Office</strong>
                  <p className=" mb-3">Co-Working Space, 2-91/12/4 NR, Plot no:4, Doc Bhavan, 5th floor, Kondapur, Hyderabad - 500081</p>
                  
                  <strong className="text-white">Phone:</strong>
                  <p className="mb-2">+91 9849070179</p>
                  <strong className="text-white">Email:
                  <p><a className="text-white" href="#">info@innoclique.com</a></p></strong>
                  
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyrights &copy; 2024 <a
                  href="https://Innoclique.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Innoclique
                </a> Cognitive Technologies Pvt. Ltd. All Rights Reserved Copyright {' '}
                

                
              </p>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="footer-shape-1">
          <img src="/images/footer/footer-shape-1.png" alt="image" />
        </div>
        <div className="footer-shape-2">
          <img src="/images/footer/footer-shape-2.png" alt="image" />
        </div>
        <div className="footer-shape-3">
          <img src="/images/footer/footer-shape-3.png" alt="image" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
