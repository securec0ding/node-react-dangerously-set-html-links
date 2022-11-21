import React from 'react'
import axios from 'axios'


class PostsForm extends React.Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const post = {
      link: event.target.link.value,
      postTitle: event.target.postTitle.value,
      review: event.target.review.value
    }
    axios.post('/api/posts', { post })
      .then(res => {
        window.location = '/review/' + res.data.postId
      })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='postTitle'>Enter a title</label>
        <br />
        <input id='postTitle' name='postTitle' type='text' />
        <br /><br />

        <label htmlFor='link'>Enter a link</label>
        <br />
        <input id='link' name='link' type='link' />
        <br />        <br />

        <label htmlFor='Review'>Write your review</label>
        <br />

        <textarea rows='4' cols='50' id='review' name='review' type='text' />
        <br />
        <i>Markdown supported</i>
        <br />
        <br />

        <button type='submit'>Create New Post</button>
      </form>
    )
  }
}

export default PostsForm