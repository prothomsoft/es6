import React from 'react';
import { render } from 'react-dom';

class ImagesRenderer extends React.Component {

  render() {
    let images = this.props.images.map((image) => {
      return <img key={image.id} src={image.src} />
    });
    return (
      <div> {images}</div>
    );
  }
}

ImagesRenderer.propTypes = {
  employees: React.PropTypes.array.isRequired
}

ImagesRenderer.defaultProps = {
  employees: []
}

export default ImagesRenderer;