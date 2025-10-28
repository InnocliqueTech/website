import connectMongoDB from "libs/mongodb";
import Blogs from "models/blog";

export default async function handlerget(request, res) {
    try {
      await connectMongoDB();
      if (request.method === 'GET') {
        // const blogsData = await Blogs.find();
        const blogsData = await Blogs.find({ deleted: { $ne: true } });
        return res.json({
          TotalBlogs: blogsData.length,
          blogsData,
          status: 200,
        });
      }
    } catch (error) {
      // Handle the error
      console.log(error)
    }
  }