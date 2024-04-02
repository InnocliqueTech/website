import connectMongoDB from "libs/mongodb";
import Blogs from "models/blog";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10MB', // Adjust the limit as needed
        },
    },
};

export default async function handler (request, response) {
    try {
        await connectMongoDB();

        const {query: {id}, method} = request;

        if(method === 'GET') {
            if(!id) {
                return response.status(400).json({
                    message: 'ID is required',
                });
            }

            const singleBlog = await Blogs.findById(id);

            if (!singleBlog) {
                return response.status(404).json({
                    message: 'Blog not found',
                });
            }

            return response.status(200).json({
                message: 'Blog found',
                singleBlog,
            });
        }else {
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