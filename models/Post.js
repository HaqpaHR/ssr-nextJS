import mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    imgUrl: {type: String, required: true}
})

const Post = mongoose.model('Post', PostSchema);

export default Post;