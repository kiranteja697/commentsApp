import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const commentImage =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'
// Write your code here

export default class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Comments</h1>
        <div className="main-section">
          <div>
            <p>Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
              />
              <textarea
                cols="24"
                rows="8"
                placeholder="Your Comment"
                value={comment}
                onChange={this.onChangeComment}
              />
              <button type="submit" onClick={this.onAddComment}>
                Add Comment
              </button>
            </form>
          </div>
          <img src={commentImage} alt="comments" />
        </div>
        <hr />
        <p>
          <span>0</span>Comments
        </p>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              contactDetails={eachComment}
              toggleIsLiked={this.toggleIsLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}
