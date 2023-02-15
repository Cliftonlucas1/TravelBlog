const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    user: { type: String, required: true },
    place: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', Post)
