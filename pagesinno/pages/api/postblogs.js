import connectMongoDB from "libs/mongodb";
import Blogs from "models/blog";

export default async function handlerpost(request, res) {
  try {
    await connectMongoDB();

    if (request.method === 'POST') {
      const { heading, description, date } = await request.body;

      if (!heading || !description ) {
        return res.json({
          message: 'Heading and description',
          status: 400,
        });
      }

      const newBlog = await Blogs.create({ heading, description, date });

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



