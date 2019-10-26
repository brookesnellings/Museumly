import React from 'react';
import Header from './Header';
import Artworks from './Artworks';
import Favorites from './Favorites';
import Filtered from './Filtered';
import Departments from './Departments';
import Artists from './Artists';
import axios from 'axios';

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
      drawings: [],
      showFiltered: false,
      showModern: false,
      showDrawings: false,
      artists: [],
      showArtists: false
    };

    this.fetchArtworks = this.fetchArtworks.bind(this);
    this.fetchFavorites = this.fetchFavorites.bind(this);
    this.fetchArtists = this.fetchArtists.bind(this);

    this.addFavorite = this.addFavorite.bind(this);
    this.captureSearchInput = this.captureSearchInput.bind(this);
    this.searchForArtist = this.searchForArtist.bind(this);
    this.filterByDepartment = this.filterByDepartment.bind(this);

    this.toggleShowComponent = this.toggleShowComponent.bind(this);
  }

  fetchArtworks() {
    axios
      .get('/artworks')
      .then(response => {
        console.log('Fetching artworks: ', response.data);
        // console.log('Dank banana waffles: ', this.state.artworks);
        this.setState({
          artworks: response.data
        });
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

  toggleShowComponent(component, boolean) {
    this.setState({ component: boolean });
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
      })
      .finally(() => {
        this.fetchFavorites();
      });
  }

  captureSearchInput(input) {
    this.setState({
      userInput: input
    });
  }

  searchForArtist() {
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
        } else if (dept === 21) {
          this.setState({
            modern: response.data,
            showModern: true
          });
        } else {
          this.setState({
            drawings: response.data,
            showDrawings: true
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

  fetchArtists() {
    axios
      .get('/artists')
      .then(response => {
        console.log('RESPONSE RESPONSE: ', response);
        const whateverEven = response.data.map(artist => {
          return artist.artist;
        });
        console.log(whateverEven);
        const realArtists = [];
        for (let i = 0; i < whateverEven.length; i++) {
          if (!realArtists.includes(whateverEven[i])) {
            realArtists.push(whateverEven[i]);
          }
        }
        console.log('REAL ARTISTS CODE TIL 1AM:', realArtists);
        this.setState({
          artists: realArtists
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchArtworks();
    this.fetchFavorites();
    this.fetchArtists();
  }

  render() {
    return (
      <div>
        <Header
          showComponent={this.toggleShowComponent}
          fetchFavorites={this.fetchFavorites}
          captureInput={this.captureSearchInput}
          searchForArtist={this.searchForArtist}
          userInput={this.state.userInput}
          filterByDepartment={this.filterByDepartment}
          fetchArtworks={this.fetchArtworks}
        />
        {this.state.showArtists ? (
          <Artists artists={this.state.artists} />
        ) : this.state.showFavorites ? (
          <Favorites favorites={this.state.favorites} />
        ) : this.state.showSearched ? (
          <Filtered
            filtered={this.state.filtered}
            favorites={this.state.favorites}
            addFavorite={this.addFavorite}
          />
        ) : this.state.showFiltered ? (
          <Departments
            modern={this.state.modern}
            european={this.state.european}
            drawings={this.state.drawings}
            favorites={this.state.favorites}
            addFavorite={this.addFavorite}
          />
        ) : (
                  <Artworks
                    artworks={this.state.artworks}
                    addFavorite={this.addFavorite}
                    favorites={this.state.favorites}
                  />
                )}
      </div>
    );
  }
}

export default App;
