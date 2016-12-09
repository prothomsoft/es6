import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './js/ImageGallery.js';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/:folder" component={ImageGallery} />
</Router>, document.getElementById('app'));