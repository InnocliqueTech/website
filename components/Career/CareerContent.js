import React from 'react'
import Link from 'next/link'

const CareerContent = () => {
  return (
    <>
      <div className="career-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>Career</span>
            <h2>
              When You Have Jobs In Multiple <b>Locations</b>
            </h2>
          </div>

          <div className="career-item">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-9">
                <div className="career-content">
                  <h3>
                    <Link href="/career/career-details">
                      <a>Team Lead - Digital Marketing</a>
                    </Link>
                  </h3>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Praesent sapien massa, convallis a pellentesque
                    nec egestas non nisi. Mauris blandit aliquet elit eget
                    tincidunt nibh pulvinar rutrum congue leo eget malesuada.
                  </p>
                  <ul className="list">
                    <li>
                      <span>Location:</span> New York, USA
                    </li>
                    <li>
                      <span>Type:</span> Full Time
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="career-btn text-end">
                  <Link href="/contact">
                    <a className="default-btn">Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="career-item">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-9">
                <div className="career-content">
                  <h3>
                    <Link href="/career/career-details">
                      <a>Senior ASP.Net Core Developer</a>
                    </Link>
                  </h3>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Praesent sapien massa, convallis a pellentesque
                    nec egestas non nisi. Mauris blandit aliquet elit eget
                    tincidunt nibh pulvinar rutrum congue leo eget malesuada.
                  </p>
                  <ul className="list">
                    <li>
                      <span>Location:</span> New York, USA
                    </li>
                    <li>
                      <span>Type:</span> Half Time
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="career-btn text-end">
                  <Link href="/contact">
                    <a className="default-btn">Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="career-item">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-9">
                <div className="career-content">
                  <h3>
                    <Link href="/career/career-details">
                      <a>Android Developer</a>
                    </Link>
                  </h3>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Praesent sapien massa, convallis a pellentesque
                    nec egestas non nisi. Mauris blandit aliquet elit eget
                    tincidunt nibh pulvinar rutrum congue leo eget malesuada.
                  </p>
                  <ul className="list">
                    <li>
                      <span>Location:</span> New York, USA
                    </li>
                    <li>
                      <span>Type:</span> Half Time
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="career-btn text-end">
                  <Link href="/contact">
                    <a className="default-btn">Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="career-item">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-9">
                <div className="career-content">
                  <h3>
                    <Link href="/career/career-details">
                      <a>Graphic Designer</a>
                    </Link>
                  </h3>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Praesent sapien massa, convallis a pellentesque
                    nec egestas non nisi. Mauris blandit aliquet elit eget
                    tincidunt nibh pulvinar rutrum congue leo eget malesuada.
                  </p>
                  <ul className="list">
                    <li>
                      <span>Location:</span> New York, USA
                    </li>
                    <li>
                      <span>Type:</span> Full Time
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="career-btn text-end">
                  <Link href="/contact">
                    <a className="default-btn">Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="career-item">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-9">
                <div className="career-content">
                  <h3>
                    <Link href="/career/career-details">
                      <a>Digital Marketing Executive</a>
                    </Link>
                  </h3>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Praesent sapien massa, convallis a pellentesque
                    nec egestas non nisi. Mauris blandit aliquet elit eget
                    tincidunt nibh pulvinar rutrum congue leo eget malesuada.
                  </p>
                  <ul className="list">
                    <li>
                      <span>Location:</span> New York, USA
                    </li>
                    <li>
                      <span>Type:</span> Full Time
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="career-btn text-end">
                  <Link href="/contact">
                    <a className="default-btn">Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerContent
