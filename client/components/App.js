import React from 'react';
import Header from './Header';
import Artworks from './Artworks';
import Favorites from './Favorites';
import axios from 'axios';
import { thisExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: [],
      showFavorites: false
    };
    this.fetchArtworks = this.fetchArtworks.bind(this);
    this.updateShowFavorites = this.updateShowFavorites.bind(this);
  }

  fetchArtworks() {
    axios
      .get('/artworks')
      .then(response => {
        console.log('Fetching artworks: ', response.data);
        console.log('Dank banana waffles: ', this.state.artworks);
        this.setState(
          {
            artworks: response.data
          },
          () => {
            console.log('inSetState:', this.state.artworks);
          }
        );
      })
      .catch(error => {
        console.log('Error fetching artworks: ', error);
      });
  }

  updateShowFavorites() {
    this.setState({ showFavorites: !this.state.showFavorites });
  }

  componentDidMount() {
    this.fetchArtworks();
  }

  render() {
    return (
      <div>
        <Header showFavorites={this.updateShowFavorites} />
        {this.state.showFavorites ? <Favorites /> : <Artworks artworks={this.state.artworks} />}
      </div>
    );
  }
}

export default App;
