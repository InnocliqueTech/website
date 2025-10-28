"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Button from "@mui/material/Button";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { CldUploadWidget } from 'next-cloudinary';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditBlog = () => {
    const router = useRouter();

    const [heading, setHeading] = useState('');
    const [headingImage, setHeadingImage] = useState(null);
    const [description, setDescription] = useState('');
    const [descriptionImages, setDescriptionImages] = useState([]);
    const [error, setError] = useState(null);
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
    // const [blog, setBlog]=useState(localStorage.getItem('blog'))



    useEffect(() => {
       console.log(JSON.parse(localStorage.getItem('blog')))
       let blog = JSON.parse(localStorage.getItem('blog'))
        if(blog) {
          console.log('BLOG', blog)
          setHeading(blog.heading)
          setDescription(blog.description)
          setHeadingImage(blog.image)
        }
    },[])

    const handleFormSubmit = async () => {
      let blog = JSON.parse(localStorage.getItem('blog'))

      try {
        const response = await axios.put(`/api/editblog/${blog._id}`, {
          heading,
          description,
          image: headingImage
        })
        if (response.status === 200) {
          Swal.fire('Success', response.data.message, 'success');
    
          router.push(`/blog/${blog._id}`);
        } else {
          Swal.fire('Error', response.data.message, 'error');
        }
      } catch (error) {
        console.log('Error updating blog:', error)
        Swal.fire('Error', 'Failed to update blog', 'error');
      }
    }

    const modules = {
        toolbar: {
          container: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'], // Include image option in the toolbar
            ['clean']
          ],
        },
      };
    
  return (
    <div className="container">
        <div className="section-title">
    <div style={{ maxWidth: '600px', margin: 'auto' }}>

      <div>
        <h3 style={{padding:"20px"}}>Edit Blog</h3>
      </div>
      <TextField
        variant="outlined"
        // type="text"
        style={{ width: '100%', marginBottom: '10px' }}
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        label="Edit Blog heading"
      />
      {/* <input
        type="file"
        style={{ width: '100%', marginBottom: '10px' }}
        onChange={handleHeadingImageChange}
      /> */}

      <CldUploadWidget uploadPreset="d1mo2pu6"
        onSuccess={(result, { widget }) => {
          // setResource(result?.info);
          console.log(result)
          if (result && result.info && result.info.secure_url) {
            setHeadingImage(result.info.secure_url)
          }
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <>
            <Button
              variant='contained'
              // startIcon={<CloudUploadIcon />}
              onClick={() => open()}>
              <span className='m-1'><CloudUploadIcon /></span>
              {/* Edit Image */}
              {headingImage ? 'Image Uploaded': 'Upload Image'}
            </Button>
      {headingImage && <p>Image Uploaded</p>}
                </>
          );
        }}
      </CldUploadWidget>

      <ReactQuill
        value={description}
        onChange={setDescription}
        modules={modules}
      
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" style={{ marginRight: '10px' }} onClick={handleFormSubmit}>Update Blog</Button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
    </div>
  )
}

export default EditBlog