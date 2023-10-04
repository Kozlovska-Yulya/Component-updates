import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  hideContent = () => {
    this.setState({
      isShow: false,
    });
  };

  showContent = () => {
    this.setState({
      isShow: true,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand onClose={this.hideContent} title="Some text">
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
