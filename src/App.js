import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "flynn", "daal", "kneeprayer"],
  };

  componentDidMount = () => {

    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  
  };

  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  };
}



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

const ErrorFallback = () => " Sorry something went wrong";

class App extends Component {

  state = {
    hasError: false,
  };

  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    return (
      <>
        <ReturnTypes/>
        <Portals/>
        {hasError ? <ErrorFallback/> : <ErrorMaker/>}
        <ErrorMaker/>
      </>
    )
    
  }
}

export default App;
