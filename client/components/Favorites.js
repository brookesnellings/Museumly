import React from 'react';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.showFavorites && (
          <p>
            I will conditionally render these favorited artworks when Favorites is clicked on in
            Header component
          </p>
        )}
      </div>
    );
  }
}

export default Favorites;
