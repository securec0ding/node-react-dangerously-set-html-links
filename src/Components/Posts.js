import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Posts extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    var posts = []
    axios.get('/api/posts')
      .then(res => {
        posts = res.data
        this.setState({ posts })
      })
  }

  render() {
    return (
      <div className='Posts'>
        <h1>Meme Review DOT COM</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post._id}>
              <hr />
              <h2><a href={post.link}>{post.postTitle}</a></h2>
              <Link to={`review/${post._id}`}>Read Review</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Posts