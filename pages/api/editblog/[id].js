import connectMongoDB from "libs/mongodb";
import Blogs from "models/blog";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10MB', // Adjust the limit as needed
        },
    },
};

export default async function handler(request, response) {
    try {
        await connectMongoDB();

        const { query: { id }, method,} = request;

        if (method === 'PUT') {
            const { heading, description, image } = request.body;

            if (!id || !heading || !description) {
                return response.status(400).json({
                    message: 'ID, heading, and description are required fields',
                });
            }

            const updatedBlog = await Blogs.findByIdAndUpdate(id, {
                heading,
                description,
                image,
            }, { new: true });

            if (!updatedBlog) {
                return response.status(404).json({
                    message: 'Blog not found',
                });
            }

            return response.status(200).json({
                message: 'Blog updated successfully',
                updatedBlog,
            });
        } else {
            return response.status(405).json({
                message: 'Method Not Allowed',
            });
        }
    } catch (error) {
        console.error('Error in API route:', error);

        return response.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
}
