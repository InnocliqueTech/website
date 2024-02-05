import connectMongoDB from "libs/mongodb";
import Blogs from "models/blog";

export default async function editlog(req, res) {
    try {
        await connectMongoDB();
        if(req.method === 'PUT') {
            const {id} = req.query
           const updatedData = req.body;
           console.log(id, "putid")

           if(!id) {
            return res.json({
                message: "Blog ID is required for update",
                status: 400
            })
           }

           const updatedBlog = await Blogs.findByIdAndUpdate(id, updatedData, {new: true})
           if(!updatedBlog) {
            return res.json({
                message: "Blog not found",
                status: 404
            })
           }

           return res.json({
            message: "Blog updated successfully",
            updatedBlog,
            status:"200"
           })
        }else{
            return res.json({
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

