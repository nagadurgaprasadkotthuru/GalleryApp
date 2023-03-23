// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageObject, activeImageId, onChangeImageId} = props
  const {thumbnailUrl, id, thumbnailAltText} = imageObject
  const changeImageId = () => onChangeImageId(id)
  const activeClass = activeImageId === id ? 'remove-opacity' : ''
  return (
    <li className={`list-element ${activeClass}`}>
      <button onClick={changeImageId} type="button" className="button">
        <img className="image-item" src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
