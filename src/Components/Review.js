import React from 'react'
import axios from 'axios'
import marked from 'marked'


class Review extends React.Component {
  constructor (props) {
    super()
    this.createMarkup = this.createMarkup.bind(this)
    this.state = {
      postId: props.match.params.id,
      post: {
        review: ''
      }
    }
  }

  componentDidMount () {
    var post = ''
    axios.get(`/api/posts/${this.state.postId}`)
      .then(res => {
        post = res.data
        this.setState({ post })
      })
  }

  createMarkup (markup) {
    return { __html: marked(markup) }
  }

  render () {
    return (
      <div>
        <h1>{this.state.post.postTitle}</h1>
        <a href={this.state.post.link}>Link</a>
        <div dangerouslySetInnerHTML={this.createMarkup(this.state.post.review)} />
      </div>
    )
  }
}

export default Review