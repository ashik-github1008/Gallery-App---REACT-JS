// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThumbnail = () => {
    clickThumbnail(id)
  }

  const thumbnailClass = isActive ? 'thumbnail-active' : 'thumbnail-inactive'

  return (
    <li className="Thumbnail-item">
      <button className="btn-thumbnail">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickThumbnail}
          className={thumbnailClass}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
