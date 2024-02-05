import React from "react";

const CTO = () => {
  return (
    <>
      <div className="overview-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Call Us</h3>
                <span>
                  <a href="tel:9901234567">+91 9849070179</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Email Us</h3>
                <span>
                  <a href="mailto:info@innoclique.com">info@innoclique.com</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Tech Support</h3>
                <span>
                  <a href="tel:15143125678">+1 (514) 312-5678</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Visit Us</h3>
                <span>PT.No:4, DOC Bhavan, Kondapur, Hyd-81 </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTO;
