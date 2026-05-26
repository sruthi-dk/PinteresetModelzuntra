const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  imageUrl:    { type: String, required: true },
  category:    { type: String, default: 'General' },
  author:      { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes:       [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  saves:       [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });
module.exports = mongoose.model('Post', PostSchema);