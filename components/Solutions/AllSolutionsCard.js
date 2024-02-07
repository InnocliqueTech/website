import React from "react";
import Link from "next/link";


const AllSolutionsCard = () => {
  return (
    <>
      <div className="services-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>SOLUTIONS</span>
            <h2>
            Transformative Solutions for Unparalleled Growth
            </h2>
            <p>
            Innoclique's suite of solutions is strategically designed to empower your business with the tools needed for sustainable growth and efficiency.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/solutions/techinnodevdetails">
                    <a>
                      <img src="/images/solutions/solutions-1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/solutions/techinnodevdetails">
                      <a>Technology Innovation & Development</a>
                    </Link>
                  </h3>
                  <p>
                  <i>Empowering Progress with Cutting-Edge Solutions </i>
                  Our service goes beyond mere development; it's about pioneering solutions that transform business challenges into opportunities for growth and innovation.
                  </p>
                  <Link href="/services/techinnodevdetails">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/solutions/strategicitconsdetails">
                    <a>
                      <img src="/images/solutions/solutions-2.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/solutions/strategicitconsdetails">
                      <a>Strategic IT Consulting & Solutions</a>
                    </Link>
                  </h3>
                  <p>
                  <i>Crafting Your Roadmap to Technological Excellence </i>
                    We provide clarity and strategic direction in the complex IT landscape, aligning technology with your business goals for optimized performance and investment.
                  </p>
                  <Link href="/solutions/strategicitconsdetails">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/solutions/costeffectivedetails">
                    <a>
                      <img src="/images/solutions/solutions-4.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/solutions/costeffectivedetails">
                      <a>Cost-Effective Managed Services</a>
                    </Link>
                  </h3>
                  <p>
                    <i>Optimizing Operations While Reducing Costs</i> Our managed services offer a balance of operational excellence and cost efficiency, 
                    rivaling top-tier providers at a significantly reduced cost.
                  </p>
                  <Link href="/solutions/costeffectivedetails">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            
            <div className="col-lg-3 col-md-6">
              <div className="services-item w-auto">
                <div className="services-image">
                  <Link href="/solutions/engagementmodeldetails">
                    <a>
                      <img src="/images/solutions/solutions-3.jpg" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="services-content">
                  <h3>
                    <Link href="/solutions/engagementmodeldetails">
                      <a>Engagement Models Designed for Your Success</a>
                    </Link>
                  </h3>
                  <p>Our flexible engagement models are tailored to meet the unique needs and 
                    preferences of your projects, ensuring a partnership that aligns with your business objectives.
                    </p>
                  <Link href="/solutions/engagementmodeldetails">
                    <a className="services-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

         
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/services-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AllSolutionsCard;
