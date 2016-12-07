import React from 'react';
import {render} from 'react-dom';
require('./styles.css')

class App extends React.Component {
  render () {
    return <div class="intro-component">
              <h1>nice job</h1>
           </div>;
  }
}

render(<App/>, document.getElementById('app'));