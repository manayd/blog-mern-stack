import mongoose from "mongoose"

const blogSchema = mongoose.Schema(
    {
       title: {
        type: String,
        required: true,
       },
       publishDate: {
        type: Date,
        required: true,
       },
       article: {
        type: String,
        required: true,
       },

    }
);

export const Blog = mongoose.model('Blog', blogSchema)