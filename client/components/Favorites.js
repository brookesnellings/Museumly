import React from 'react';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <p>
        I will conditionally render these favorited artworks when Favorites is clicked on in Header
        component
      </p>
    );
  }
}

export default Favorites;
