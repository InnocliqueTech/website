// pages/blog/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const sblog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    console.log('ID:', id); 
    if (id) {
      fetch(`http://localhost:3000/api/blog/${id}`)
        .then(async response => {
          const fetchData = await response.json();
          console.log(fetchData)
          setBlogData(fetchData); // Update state with fetched data
        })
        .catch(error => {
          console.error('Error fetching blog data:', error);
        });
     
    }
  }, [id]);


  const htmlRender = (data) => {
    return (
      <div>
        {data}
      </div>
    );
  };

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
   
      <h1>{blogData.blog.heading}</h1>
      {/* {htmlRender(blogData.blog.description)} */}
      <div dangerouslySetInnerHTML={{ __html: blogData.blog.description }} />

      {/* Add more content as needed */}
    </div>
  );
};

export default sblog;
