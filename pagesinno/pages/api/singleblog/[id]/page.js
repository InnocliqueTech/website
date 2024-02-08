import connectMongoDB from "libs/mongodb";
import Blogs from "models/blog";

export default async function singleblog(req, res) {
    try {
        await connectMongoDB();
        if(req.method === "GET") {
            const {id} = req.query
            if(!id) {
                return res.json({
                    message:"Blog ID is required",
                    status: 400
                })
            }
            const blog = await Blogs.findById(id)
            if(!blog) {
                return res.json({
                    message: "Blog not found",
                    status: 404
                })
            }
            return res.json({
                message: "Blog retrieved successfully",
                blog,
                status: 200
            })

        }else{
            return res.jon({
                message: "Method not allowed",
                status: 405
            })
        }
    } catch (error) {
        console.error("Error in API route:", error)
        return res.json({
            message: "Internal server error",
            status: 500,
            error: error.message
        })
    }
}