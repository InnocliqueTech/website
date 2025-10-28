import connectMongoDB from "libs/mongodb";
import Blogs from "models/blog";
// import cloudinary from 'cloudinary-react';


// cloudinary.config({
//   cloud_name: 'dgi4evce0',
//   api_key: '556683438218227',
//   api_secret: 'EDqDSLVSbcqScEyFKGXOiRjiJms',
//  });

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10MB', // Adjust the limit as needed
    },
  },
};


export default async function handlerpost(request, res) {
  try {
    await connectMongoDB();

    if (request.method === 'POST') {
      console.log("REQ",request.body, request.body.heading)
      const { heading, description, data, image } = request.body;
      console.log("HEADING", heading, description)
      if (!heading || !description ) {
        return res.json({
          message: 'Heading and description',
          status: 400,
        });
      }

    

      const newBlog = await Blogs.create({ description, heading, image });

      return res.json({
        message: 'Blog created',
        newBlog,
        status: 201,
      });
    } else {
      return res.json({
        message: 'Method Not Allowed',
        status: 405,
      });
    }
  } catch (error) {
    console.error('Error in API route:', error);

    return res.json({
      message: 'Internal Server Error',
      status: 500,
      error: error.message,
    });
  }
}




