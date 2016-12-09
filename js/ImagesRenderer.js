import React from 'react';
import { render } from 'react-dom';

class ImagesRenderer extends React.Component {
  
  render() {    
    let images = this.props.images.map((image) => {
      return <div className="intro-component" key={image.id}>{image.id}</div>
    });
    return (
      <div> {images}</div>
    );
  }
}

ImagesRenderer.propTypes = {
   employees : React.PropTypes.array.isRequired
}

ImagesRenderer.defaultProps = {
      employees: []
}

export default ImagesRenderer;