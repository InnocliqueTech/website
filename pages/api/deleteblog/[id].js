import connectMongoDB from "libs/mongodb";
import Blogs from "models/blog";

export default async function handlerdelete(request, response) {
    try {
        await connectMongoDB();

        if (request.method === 'DELETE') {
            // Extract the blog ID from the request parameters
            const { id } = request.query;

            // Soft delete the blog by updating its `deleted` field to true
            const deletedBlog = await Blogs.findByIdAndUpdate(
                id,
                { deleted: true },
                { new: true } // Return the updated document
            );

            if (!deletedBlog) {
                // If the blog with the given ID is not found, return a 404 response
                return response.status(404).json({ message: 'Blog not found' });
            }

            // Respond with a success message and the deleted blog data
            return response.status(200).json({
                message: 'Blog deleted successfully',
                deletedBlog,
            })
        } else {
            // If the request method is not DELETE, return a 405 response
            return response.status(405).json({ message: 'Method Not Allowed' });
        }


    } catch (error) {
        console.error('Error in delete blog API:', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}