import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import ImagesRenderer from './ImagesRenderer.js';
require('../css/styles.css')

class ImageGallery extends React.Component {

  constructor() {
    super();
    this.state = {
      images: [],
      imageCursor: 1,
      imagePerPage: 5,
      imageTotal: 20,
      loadedAll: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.loadMorePhotos = this.loadMorePhotos.bind(this);
  }

  handleScroll() {
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
      this.loadMorePhotos();
    }
  }

  loadMorePhotos(e) {
    if (e) {
      e.preventDefault();
    }

    if (this.state.imageCursor > this.state.imageTotal) {
      this.setState({ loadedAll: true });
      return false;
    }

    let images = [];
    for (var id = this.state.imageCursor; id < this.state.imageCursor + this.state.imagePerPage; id++) {

      let width = 1140;
      let height = 762;
      let aspectRatio = parseFloat(width / height);
      let src = "http://sk.99foto.pl/react/" + this.props.params.folder + "/99FOTOPL_SP_" + id + ".jpg";

      images.push({
        id: id,
        src: src,
        width: width,
        height: height,
        aspectRatio: aspectRatio,
        lightboxImage: { src: src, caption: "domel" }
      })
    }
    this.setState({
      images: this.state.images ? this.state.images.concat(images) : images,
      imageCursor: this.state.imageCursor + this.state.imagePerPage,
      loadedAll: false
    });
  }

  componentDidMount() {
    this.loadMorePhotos();
    this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200);
    window.addEventListener('scroll', this.handleScroll);
  }

  renderImages() {
    return <ImagesRenderer images={this.state.images} />
  }

  render() {

    if (this.state.images && this.state.loadedAll) {
      return (
        <div>
          {this.renderImages()}
        </div>
      );
    } else if (this.state.images) {
      return (
        <div>
          {this.renderImages()}
          <div className="loading-msg" id="msg-loading-more">Loading</div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="loading-msg" id="msg-loading-more">Loading</div>
        </div>
      );
    }
  }
}

export default ImageGallery;