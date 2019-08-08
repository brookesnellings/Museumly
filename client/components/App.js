import React from 'react';
import Header from './Header';
import Artworks from './Artworks';
import Favorites from './Favorites';
import Filtered from './Filtered';
import axios from 'axios';
import { thisExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: [],
      favorites: [],
      showFavorites: false,
      userInput: '',
      filtered: [],
      showSearched: false
    };
    this.fetchArtworks = this.fetchArtworks.bind(this);
    this.fetchFavorites = this.fetchFavorites.bind(this);
    this.updateShowFavorites = this.updateShowFavorites.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.captureSearchInput = this.captureSearchInput.bind(this);
    this.searchForArtist = this.searchForArtist.bind(this);
    this.updateShowSearched = this.updateShowSearched.bind(this);
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

  fetchFavorites() {
    axios
      .get('/favorites')
      .then(response => {
        console.log('Fetching favorites: ', response.data);
        this.setState({
          favorites: response.data
        });
      })
      .catch(error => {
        console.log('Error fetching favorites: ', error);
      });
  }

  updateShowFavorites(boolean) {
    this.setState({ showFavorites: boolean });
  }

  updateShowSearched(boolean) {
    this.setState({ showSearched: boolean });
  }

  addFavorite(favorite) {
    axios
      .post('/favorites', {
        artwork_id: favorite
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  captureSearchInput(input) {
    this.setState({
      userInput: input
    });
  }

  searchForArtist(artist) {
    axios
      .get('/search', {
        params: {
          artist: this.state.userInput
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          filtered: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.updateShowSearched(true);
      });
  }

  componentDidMount() {
    this.fetchArtworks();
  }

  render() {
    return (
      <div>
        <Header
          showFavorites={this.updateShowFavorites}
          showSearched={this.updateShowSearched}
          fetchFavorites={this.fetchFavorites}
          captureInput={this.captureSearchInput}
          searchForArtist={this.searchForArtist}
          userInput={this.state.userInput}
        />
        {this.state.showFavorites ? (
          <Favorites favorites={this.state.favorites} />
        ) : this.state.showSearched ? (
          <Filtered filtered={this.state.filtered} />
        ) : (
          <Artworks artworks={this.state.artworks} addFavorite={this.addFavorite} />
        )}
      </div>
    );
  }
}

export default App;
