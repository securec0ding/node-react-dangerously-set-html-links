import mongoose from 'mongoose'

/** DATABASE */
const mongoDB = 'mongodb://localhost:27017/react-sneaky-links'
mongoose.connect(mongoDB, { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

/** MODELS */
var Schema = mongoose.Schema
var PostSchema = new Schema({
  postTitle: { type: String, required: true },
  link: { type: String, required: true },
  review: { type: String, required: true }
})
var Post = mongoose.model('Post', PostSchema)

/** ROUTES */
function addNewPost (req, res) {
  var post = req.body.post
  if (!post) {
    res.sendStatus(400)
    return 0
  }

  if (post.link.startsWith('javascript:')) {
    console.log('Prevented XSS')
    post.link = '#'
  }

  const newPost = new Post(req.body.post)
  newPost.save((err, newPost) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    } else {
      console.log('Created new post:', newPost)
      res.json({ postId: newPost._id })
    }
  })
}

function viewPosts (req, res) {
  Post.find({}, (err, posts) => {
    if (err) {
      console.log(err)
    } else {
      res.json(posts)
    }
  })
}

function getPost (req, res) {
  if (!req.body) {
    res.sendStatus(400)
    return 0
  }
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    } else {
      console.log('Found:', post)
      res.json(post)
    }
  })
}

export default { addNewPost, viewPosts, getPost }