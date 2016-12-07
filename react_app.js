import React from 'react';
import {render} from 'react-dom';
require('./css/styles.css')

class App extends React.Component {
  render () {
    return <div className='intro-component'>
              <h1>nice job 3</h1>
           </div>;
  }
}

render(<App/>, document.getElementById('app'));