const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date()
    }
})

const PostData = mongoose.model('PostData', PostSchema);

module.exports = PostData;
// module.exports = mongoose.model("PostData", PostSchema);
