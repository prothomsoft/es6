import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import ImagesRenderer from './js/ImagesRenderer.js';
require('./css/styles.css')

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      images: [],
      imageCursor: 1,
      imagePerPage: 20,
      imageTotal: 40,
      loadedAll: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.loadMorePhotos = this.loadMorePhotos.bind(this);
  }

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
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
    for (var i = this.state.imageCursor; i < this.state.imageCursor + this.state.imagePerPage; i++) {
      images.push({
        id: i
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
    console.log(this.state.loadedAll);
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
      <div>
        <div className="loading-msg" id="msg-loading-more">Loading</div>
      </div>
    }
  }
}

render(<App />, document.getElementById('app'));