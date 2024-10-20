import {Component} from 'react'
import './index.css'
import ThumbnailItem from '../ThumbnailItem/index'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.

class Gallery extends Component {
  state = {activeTabId: imagesList[0].id}

  clickThumbnail = id => {
    this.setState({activeTabId: id})
  }

  getClickImage = () => {
    const {activeTabId} = this.state
    const filterImageList = imagesList.filter(
      eachImageDetails => eachImageDetails.id === activeTabId,
    )

    // console.log(filterImageList)

    const selectedImage = filterImageList[0]

    const eL = (
      <img
        src={`${selectedImage.imageUrl}`}
        className="img"
        alt={selectedImage.imageAltText}
      />
    )
    // console.log(eL);
    return eL
  }

  render() {
    const {activeTabId} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          {this.getClickImage()}
          <h1 className="heading">Nature Photography</h1>
          <div className="img-tab-container">
            <p className="courtesy">Nature Photography by Rahul</p>
            <ul className="img-thumbnail-container">
              {imagesList.map(imageDetails => (
                <ThumbnailItem
                  imageDetails={imageDetails}
                  key={imageDetails.id}
                  clickThumbnail={this.clickThumbnail}
                  isActive={activeTabId === imageDetails.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
