const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    piece: String,
    composer: String,
    email: String
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;