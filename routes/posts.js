const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'username avatar').sort('-createdAt');
  res.json(posts);
});

// Create post
router.post('/', auth, upload.single('image'), async (req, res) => {
  const { title, description, category } = req.body;
  const post = await Post.create({
    title, description, category,
    imageUrl: `/uploads/${req.file.filename}`,
    author: req.user.id,
  });
  res.json(post);
});

// Like a post
router.put('/:id/like', auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  const idx = post.likes.indexOf(req.user.id);
  if (idx === -1) post.likes.push(req.user.id);
  else post.likes.splice(idx, 1);
  await post.save();
  res.json(post);
});

// Save a post
router.put('/:id/save', auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  const idx = post.saves.indexOf(req.user.id);
  if (idx === -1) post.saves.push(req.user.id);
  else post.saves.splice(idx, 1);
  await post.save();
  res.json(post);
});

module.exports = router;