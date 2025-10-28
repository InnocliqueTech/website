// import React, { useState } from 'react';
// import axios from 'axios';
// import dynamic from 'next/dynamic';
//  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
//  import "react-quill/dist/quill.snow.css";


// const BlogModal = () => {
//   const [heading, setHeading] = useState('');
//   const [headingImage, setHeadingImage] = useState(null);
//   const [image, setImage] = useState(null);
//   const [description, setDescription] = useState('');
//   const [descriptionImages, setDescriptionImages] = useState([]);
//   const [showQuill, setShowQuill] = useState(false); // Track whether to show ReactQuill
//   const [error, setError] = useState(null);


//   const handleFormSubmit = async () => {

//     setError(null); // Reset error state

//     // Prepare form data
//     const formData = new FormData();
//     formData.append('heading', heading);
//     formData.append('headingImage', headingImage);
//     // formData.append('image', image);
//     formData.append('description', description);
//     descriptionImages.forEach((image) => formData.append('descriptionImages', image));

//     try {
//       // Send form data to the API route
//       const response = await axios.post('http://localhost:3000/api/postblogs', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       console.log('Blog created:', response.data);

//         // Clear form fields after successful submission
//         setHeading('');
//         setHeadingImage(null);
//         setDescription('');
//         setDescriptionImages([]);
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       setError('Error creating blog. Please try again.'); // Set error message
//     }
//   };

//   const handleHeadingImageChange = (e) => {
//     setHeadingImage(e.target.files[0]);
//   };

//   const handleDescriptionImageChange = (e) => {
//     setDescriptionImages([...descriptionImages, e.target.files[0]]);
//   };



//   // Function to handle description change
//   const handleDescriptionChange = (value) => {
//     setDescription(value);
//   };

//   // Function to handle Quill module import and set showQuill to true
//   const loadQuill = async () => {
//     setShowQuill(true);
//   };

//   // Quill modules configuration for the toolbar buttons
//   // const modules = {
//   //   toolbar: {
//   //     container: [
//   //       [{ header: [1, 2, 3, false] }],
//   //       ['bold', 'italic', 'underline', 'strike'],
//   //       ['link'],
//   //       ['clean'],
//   //     ],
//   //   },
//   // };

//   const modules = {
//     toolbar: {
//       container: [
//         [{ header: [1, 2, 3, 4, 5, 6, false] }],
//         ['bold', 'italic', 'underline', 'strike'],
//         [{ 'color': [] }, { 'background': [] }],
//         [{ 'align': [] }],
//         [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//         ['link', 'image'],
//         ['clean']
//       ],
//     },
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: 'auto' }}>
//       <input
//         type="text"
//         style={{ width: '100%', marginBottom: '10px' }}
//         value={heading}
//         onChange={(e) => setHeading(e.target.value)}
//         placeholder="Enter heading"
//       />
//       <input
//         type="file"
//         style={{ width: '100%', marginBottom: '10px' }}
//         onChange={handleHeadingImageChange}
//       />
//       <textarea
//         style={{ width: '100%', height: '200px', marginBottom: '10px' }}
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Enter description"
//       ></textarea>

//         {/* <ReactQuill
//           value={description}
//           onChange={handleDescriptionChange}
//           modules={modules} // Include the modules prop with toolbar configuration
//         /> */}
//        <input
//         type="file"
//         style={{ width: '100%', marginBottom: '10px' }}
//         onChange={handleDescriptionImageChange}
//       />
//       <ReactQuill
//         value={description}
//         onChange={setDescription}
//         modules={modules}
//       />
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//         <button onClick={handleFormSubmit} style={{ marginRight: '10px' }}>Submit</button>
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default BlogModal;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "@mui/material/Button";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { CldUploadWidget } from 'next-cloudinary';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const BlogModal = () => {

  const router = useRouter();
  const [heading, setHeading] = useState('');
  const [headingImage, setHeadingImage] = useState(null);
  const [description, setDescription] = useState('');
  const [descriptionImages, setDescriptionImages] = useState([]);
  const [error, setError] = useState(null);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
  const handleFormSubmit = async () => {
    setError(null); // Reset error state
    console.log(heading, description)
    // Prepare form data
    // const formData = new FormData();
    // formData.append('heading', heading);
    // formData.append('image', headingImage);
    // formData.append('description', description);
    // formData.append('data', description);

    let obj = {
      "heading": heading,
      "description": description,
      "image": headingImage
    }

    // descriptionImages.forEach((image) => {
    //   formData.append('descriptionImages', image);
    // });

    try {
      // Send form data to the API route
      const response = await axios.post('/api/postblogs/', obj, {
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
      });

      console.log('Blog created:', response.data);
      Swal.fire({
        title: "Congratulations",
        text: "Blog is created!",
        icon: "success"
      });
      router.push('/blog/blog')
      // Clear form fields after successful submission
      setHeading('');
      setHeadingImage(null);
      setDescription('');
      setDescriptionImages([]);
    } catch (error) {
      console.error('Error creating blog:', error);
      setError('Error creating blog. Please try again.'); // Set error message
    }
  };

  useEffect(() => {
    localStorage.removeItem('blog')
  })

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

  const handleHeadingImageChange = (e) => {
    setHeadingImage(e.target.files[0]);
  };

  const handleDescriptionImageChange = (e) => {
    const images = [...descriptionImages];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
    }
    setDescriptionImages(images);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>

      <div>
        <h3 style={{ padding: "20px" }}>Create a new Blog</h3>
      </div>
      <TextField
        variant="outlined"
        // type="text"
        style={{ width: '100%', marginBottom: '10px' }}
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        label="Enter Blog heading"
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
            <Button
              variant='contained'
              // startIcon={<CloudUploadIcon />}
              onClick={() => open()}>
              <span className='m-1'><CloudUploadIcon /></span>
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
      {headingImage && <p>Image Uploaded</p>}

      <ReactQuill
        value={description}
        onChange={setDescription}
        modules={modules}

      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleFormSubmit} style={{ marginRight: '10px' }}>Submit</Button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default BlogModal;
