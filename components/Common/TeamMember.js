import React from "react";
import { useState } from "react";


const TeamMember = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const showMoreHandler = () => {
    setShowMore(!showMore);
  };
  const showMoreHandler1 = () => {
    setShowMore1(!showMore1)
  }

  const longDescription1 = `
    Boasts over 23 years of experience in product development, with a strong technical background focused on product research and development, enterprise solutions.
    Successfully established two offshore development centres from the ground up, spearheading the development of multiple product lines and driving their market success.
    NK excels in building high-performing teams, played a critical role in growing QSSI INC, US offshore delivery center from a team of 5 to 120+ in less than a year,
    and later merging with Optum Global Solutions (a United Health Group company).
  `;
  const longDescription2 = `Proven successful track record as Business Unit Head, strong experience in managing business of volume $100M and above, ensuring best technical solutions designed
  for performance, reliability, scalability, maintainability, supportability, business continuity, and business agility while leveraging industry's best practices.
  Well-honed Business Planning qualities, Design IT Blueprints & Roadmap, Global IT Delivery & Operational Readiness, Internal Consulting, Privacy & Security Compliance,
  Budget Management, Cost of Quality, Cost Control, IT Governance, Team Transformations and Industry's Best Practices.`

  const longDescription3 = ` Ram with more than 24 years of experience in Enterprise Solutions and Architecture, 
  Ram is a skilled and results-driven person with a proven track record of driving  successful technology initiatives across a variety of industries. He played a critical 
  role in setting up two startups from the ground up alongside NK over the last decade.
  `;
  const longDescription4 = `Ram is highly proficient in Microsoft technologies, cloud computing, and DevOps, and  has a demonstrated ability to deliver high-quality products and enforce sound product 
  engineering practices. He has led and mentored successful technology teams across various  organizations and has experience delivering advanced technology systems, solutions, 
  architecture, and applications.`
  const longDescription5 = `Ram's leadership style is a strong commitment to collaboration, quality, and continuous
  improvement. He has extensive expertise in cloud-based architectures and DevOps  methodologies, which enable his teams to rapidly develop, deploy, and scale applications
   with exceptional efficiency and reliability. Additionally, he excels at developing  technology roadmaps that align with business objectives, driving technical innovation, 
   and leading enterprise-scale technology transformations`
  return (
    <>
      <div className="team-area pt-100 pb-75">
        <div className="container">
          <div className="section-title section-style-two">
            <div className="section-bg-text">TEAM</div>
            <span>TEAM MEMBER</span>
            <h2>Our Leadership Team</h2>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 40 years lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6">
              <div className="single-team-card">
                <div className="team-image" data-tilt>
                  <img src="/images/team/team-1.png" alt="image" />

                  <ul className="team-social text-left ps-3">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/nkprofile"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>

                  </ul>
                </div>
                {/* <div className="team-content">
                  <h3 className="text-dark text-left">NK Changalasetti <span>CEO</span></h3>
                  <p>Over 23 years in product engineering, NK has a robust technical background in R&D</p>
                  <a href="/team1/" onClick={textshow}>Read More</a>
                </div> */}
                <div className="team-content">
                  <h3 className="text-dark text-left">NK Changalasetti <span>CEO</span></h3>
                  <p>
                    {showMore
                      ? (
                        <div>
                          <p>{longDescription1}</p>
                          <p>{longDescription2}</p>
                        </div>
                      )
                      : 'Boasts over 23 years of experience in product development, with a strong technical background focused on product research and development, enterprise solutions.'}
                  </p>
                  <button className="btn btn-primary" onClick={showMoreHandler}>
                    {showMore ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>



            <div className="col-lg-6 col-sm-6">
              <div className="single-team-card">
                <div className="team-image" data-tilt>
                  <img src="/images/team/team-2.png" alt="image" />

                  <ul className="team-social text-left ps-3">

                    <li>
                      <a
                        href="https://www.linkedin.com/in/rambabu-gandla-27137569"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="text-dark">Rambabu Gandla <span>COO</span></h3>
                  <p>
                    {showMore1
                      ? <div>
                        <p>{longDescription3}</p>
                        <p>{longDescription4}</p>
                        <p>{longDescription5}</p>
                      </div>
                      : 'Ram with more than 24 years of experience in Enterprise Solutions and Architecture, Ram is a skilled and results-driven person with a proven track record of driving'}
                  </p>
                  <button className="btn btn-primary" onClick={showMoreHandler1}>
                    {showMore1 ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>


          </div>

          {/* ReadMore Text Display */}
          <div className="readmoreshow">

          </div>


        </div>
      </div>
    </>
  );
};

export default TeamMember;
