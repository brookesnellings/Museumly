import React from 'react';
import Header from './Header.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
