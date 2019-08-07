import React from 'react';
import Header from './Header';
import Artworks from './Artworks';
import Favorites from './Favorites';

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
        <Favorites />
      </div>
    );
  }
}

export default App;
