import connectMongoDB from "libs/mongodb";
import Blogs from "models/blog";

export default async function handlerdelete(req, res) {
    try {
        await connectMongoDB();

        if (req.method === 'DELETE') {
            const { id } = req.query;
            console.log(id, "id")
            if (!id) {
                return res.json({
                    message: "Blog ID is required for deletion",
                    status: 400,
                })
            }

            const deletedBlog = await Blogs.findByIdAndDelete(id);
            if (!deletedBlog) {
                return res.json({
                    message: "Blog not found",
                    status: 404
                })
            }

            return res.json({
                message: "Blog deleted successfully",
                deletedBlog,
                status: 200
            })
        } else {
            return res.json({
                message: "Method not allowed",
                status: 405
            })
        }
    } catch (error) {
        console.error('Error in API route:', error)
    }
}
