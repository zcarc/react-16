import React, { Component } from 'react';
import { createPortal } from 'react-dom';


class Portals extends Component {
  render() {
    return createPortal(<Message/>, document.getElementById("touchme"));
  }
}

const Message = () => "Just touched it!";


class ReturnTypes extends Component {
  render() {
    return 'hello!';
  }
}

class App extends Component {
  render() {
    return (
      <>
        <ReturnTypes/>
        <Portals/>
      </>
    )
    
  }
}

export default App;
