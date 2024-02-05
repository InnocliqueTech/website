import React from "react";

const OurGoal = () => {
  return (
    <>
      <div className="about-area pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-wrap-image" data-tilt>
                <img
                  src="/images/about/about-5.jpg"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                ><h3 className="mb-0">Our Values</h3>
                <div className="projects-details-desc">
                  <div className="article-projects-content pt-2 ps-3">
                    <ul class="projects-list mt-0">
                      <li></li>
                      <li class="mb-3"><i class="ri-checkbox-circle-line"></i> <b className="text-dark">Commitment to Excellence:</b> Persistently pursuing superior standards in every solution and service.</li>
                      <li class="mb-3"><i class="ri-checkbox-circle-line"></i> <b className="text-dark">Customer-Centric Approach:</b> Placing client needs and satisfaction at the core of our strategy.</li>
                      <li class="mb-3"><i class="ri-checkbox-circle-line"></i> <b className="text-dark">Collaboration and Communication:</b> Fostering strong partnerships through open and effective dialogue.</li>
                      <li class="mb-3"><i class="ri-checkbox-circle-line"></i> <b className="text-dark">Clarity and Transparency:</b> Ensuring honesty and openness are at the heart of all interactions.</li>
                      <li class="mb-3"><i class="ri-checkbox-circle-line"></i> <b className="text-dark">Unwavering Integrity:</b> Upholding ethical principles and trustworthiness in every decision.</li>
                      <li class="mb-3"><i class="ri-checkbox-circle-line"></i> <b className="text-dark">Innovative Solutions:</b> Continuously exploring and implementing groundbreaking technologies.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-inner-box">
            <div className="row justify-content-center align-items-top">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <h3>Our Vision</h3>
                  <p>
                  Our vision is to be at the forefront of the IT industry, 
                  leading with pioneering technology solutions that adapt swiftly 
                  and effectively to the ever-evolving global landscape.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h3>Our Mission</h3>
                  <p>
                  Our mission is to craft unparalleled software solutions meticulously tailored 
                  to each client's unique objectives. By seamlessly integrating speed, quality, 
                  cost-efficiency, and robust security into our process, we not only meet but exceed 
                  expectations, empowering our clients to surpass their business goals.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="card-image" data-tilt>
                    <img src="/images/about/about-4.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-circle-shape">
          <img src="/images/about/about-circle.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default OurGoal;
