import React from "react";
import Link from "next/link";

const PricingTable = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>PRICING</span>
            <h2>
              Our <b>Pricing</b> For All Type Of Technology Services 11
            </h2>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 40 years lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              
            </div>

            <div className="col-lg-4 col-md-6">
             
            </div>

          </div>
        </div>

        {/* Shape Image */}
        <div className="pricing-bg-shape-1">
          <img src="/images/pricing/pricing-bg-shape.png" alt="image" />
        </div>
        <div className="pricing-shape-1">
          <img src="/images/pricing/pricing-shape-1.png" alt="image" />
        </div>
        <div className="pricing-shape-2">
          <img src="/images/pricing/pricing-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PricingTable;
