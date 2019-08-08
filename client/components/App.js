import React from 'react';
import Header from './Header';
import Artworks from './Artworks';
import Favorites from './Favorites';
import Filtered from './Filtered';
import Departments from './Departments';
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
      showSearched: false,
      modern: [],
      european: [],
      showFiltered: false,
      showModern: false
    };
    this.fetchArtworks = this.fetchArtworks.bind(this);
    this.fetchFavorites = this.fetchFavorites.bind(this);
    this.updateShowFavorites = this.updateShowFavorites.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.captureSearchInput = this.captureSearchInput.bind(this);
    this.searchForArtist = this.searchForArtist.bind(this);
    this.updateShowSearched = this.updateShowSearched.bind(this);
    this.filterByDepartment = this.filterByDepartment.bind(this);
    this.updateShowFiltered = this.updateShowFiltered.bind(this);
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

  updateShowFiltered(boolean) {
    this.setState({ showFiltered: boolean });
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

  filterByDepartment(dept) {
    console.log('filtering by dept: ', dept);
    axios
      .get('/department', {
        params: {
          department: dept
        }
      })
      .then(response => {
        let period;
        if (dept === 11) {
          this.setState({
            european: response.data,
            showModern: false
          });
        } else {
          this.setState({
            modern: response.data,
            showModern: true
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.updateShowFiltered(true);
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
          filterByDepartment={this.filterByDepartment}
        />
        {this.state.showFavorites ? (
          <Favorites favorites={this.state.favorites} />
        ) : this.state.showSearched ? (
          <Filtered filtered={this.state.filtered} />
        ) : this.state.showFiltered ? (
          <Departments
            showModern={this.state.showModern}
            modern={this.state.modern}
            european={this.state.european}
          />
        ) : (
          <Artworks artworks={this.state.artworks} addFavorite={this.addFavorite} />
        )}
      </div>
    );
  }
}

export default App;
