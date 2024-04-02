"use client"


import React from 'react'
import Link from 'next/link'
import BlogModal from '@/components/Common/BlogModal'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const addBlog = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // User is not logged in, redirect to login page
      router.push('/login'); // Change to your login page route
    }
  }, [router]);
  return (
    <>
      <div className="blog-area pb-100">
        <div className="container">
          <div className="section-title">
            {/* <span>ARTICLE</span> */}
            {/* <h2>
              Do you want to create <b>Blog!</b>
              <BlogModal />
            </h2> */}
            <BlogModal/>
          </div>

         
        </div>

    
      </div>
    </>
  )
}

export default addBlog
