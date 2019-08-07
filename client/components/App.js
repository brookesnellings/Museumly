import React from 'react';
import Header from './Header';
import Artworks from './Artworks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Artworks />
      </div>
    );
  }
}

export default App;
