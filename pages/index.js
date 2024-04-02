import React, { useState, useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import HeroSlider from "@/components/HomePageDemo1/HeroSlider";
import Partners from "@/components/Common/Partners";
import WhoWeAre from "@/components/HomePageDemo1/WhoWeAre";
import ServiceSlider from "@/components/Services/ServiceSlider";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import IntroVideo from "@/components/Common/IntroVideo";
import ProjectSlider from "@/components/Projects/ProjectSlider";
import Testimonials from "@/components/Common/Testimonials";
import PricingTable from "@/components/Pricing/PricingTable";
import Article from "@/components/Common/Article";
import Footer from "@/components/Layout/Footer";
import axios from 'axios';

export default function Home() {
  const [blogdata, setBlogData] = useState([]);

  useEffect(() => {
    axios.get('/api/getblogs')
      .then(response => {
        const fetchData = response.data.blogsData.filter(blog => !blog.deleted);
        setBlogData(fetchData);
      })
      .catch(error => {
        console.error('Error fetching blog data:', error);
      });
  }, []);

  useEffect(() => {
    console.log(blogdata);
  }, [blogdata]);

  return (
    <>
      <Navbar />
      <HeroSlider />
      <Partners />
      <WhoWeAre />
      <ServiceSlider />
      <WhyChooseUs />
      <div className="">
        <IntroVideo />
      </div>
      <ProjectSlider />
      <div className="m-2 bor-radius-15">
        <Article blogdata={blogdata}/>
      </div>
      <div className="m-2 bor-radius-15">
        <Footer className="rounded-4" />
      </div>
    </>
  );
}
