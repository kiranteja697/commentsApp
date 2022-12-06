import {formatDistanceToNow} from 'date-fns'

const deleteIcon =
  'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'
const likeIcon =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
const likedIcon =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const CommnetItem = props => {
  const {id, name, comment, isLiked, toggleIsLiked} = props

  const onClickLike = () => {
    toggleIsLiked(id)
  }
  const likeImg = isLiked ? likedIcon : likeIcon
  const text = isLiked ? 'Liked' : 'Like'

  return (
    <li className="">
      <div className="">
        <span>{name[0]}</span>
        <p>{name}</p>
        <p>{formatDistanceToNow()}</p>
      </div>
      <p>{comment}</p>
      <div className="">
        <div>
          <button type="button" className="">
            <img
              src={likeImg}
              className="like-icon"
              alt="like"
              onClick={onClickLike}
            />
          </button>
          <p>{text}</p>
        </div>
        <button type="button" className="delete-btn">
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </div>
    </li>
  )
}

export default CommnetItem
