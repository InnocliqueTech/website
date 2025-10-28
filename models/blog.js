import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
   
    heading: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type:String,
        required: false
    },
    deleted: {
        type: Boolean,
        default: false // Default value to false to indicate active documents
    }
    
    // image: [{
    //     type: String, // Assuming image URLs are stored as strings
    //   }],
},
{
    timestamps: true // Enable timestamps
})

const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
export default Blogs;



