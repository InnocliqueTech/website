"use client"


import React from 'react'
import Link from 'next/link'
import BlogModal from '@/components/Common/BlogModal'
import { useState, useEffect } from 'react'


const addBlog = () => {
 
  return (
    <>
      <div className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            {/* <span>ARTICLE</span> */}
            {/* <h2>
              Do you want to create <b>Blog!</b>
              <BlogModal />
            </h2> */}
            <BlogModal/>
          </div>

          {/* <div className="row justify-content-center">
            {blogdata && blogdata.map((blog) => (
              <div className="col-lg-6 col-md-12">
                <div
                  className="blog-card"
                  data-aos="fade-up"
                  data-aos-delay="890"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="blog-image">
                        <Link href="/blog/single-blog">
                          <a>
                            
                            <img src='/images/blog/blog-6.jpg' alt="image"/>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="blog-content">
                        <div className="date">{blog.date}</div>
                        <h3>
                          <Link href="/blog/single-blog">
                            <a>{blog.heading}</a>
                          </Link>
                        </h3>
                        <p>
                         {blog.description}
                        </p>
                        <Link href="/blog/[id]" as={`/blog/${encodeURIComponent(blog.id)}`}>
                          <a className="blog-btn">View More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div> */}
        </div>

        {/* <div className="blog-shape-1">
          <img src="/images/blog/blog-shape-1.png" alt="image" />
        </div> */}
      </div>
    </>
  )
}

export default addBlog
