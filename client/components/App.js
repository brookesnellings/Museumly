import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Artworks from './Artworks';
import Favorites from './Favorites';
import Modern from './Modern';
import European from './European';
import Prints from './Prints';
import Artists from './Artists';
import Searched from './Searched';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: [],
      favorites: [],
      modern: [],
      european: [],
      drawings: [],
      artists: [],
      userInput: '',
      searched: [],
      artPageCount: 0,
      favePageCount: 0
    };

    this.fetchArtworks = this.fetchArtworks.bind(this);
    this.fetchArtists = this.fetchArtists.bind(this);
    this.fetchFavorites = this.fetchFavorites.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.filterByDepartment = this.filterByDepartment.bind(this);
    this.captureSearchInput = this.captureSearchInput.bind(this);
    this.searchForArtist = this.searchForArtist.bind(this);
    this.handleScrollArtworks = this.handleScrollArtworks.bind(this);
    this.handleScrollFavorites = this.handleScrollFavorites.bind(this);

  }

  fetchArtworks(start) {
    axios
      .get('/artworks', {
        params: {
          start: start,
          limit: '10'
        }
      })
      .then(response => {
        console.log('Fetching artworks: ', response.data);
        this.setState({
          artworks: [...this.state.artworks, ...response.data]
        });
      })
      .catch(error => {
        console.log('Error fetching artworks: ', error);
      });
  }

  fetchArtists() {
    axios
      .get('/artists')
      .then(response => {
        const allArtists = response.data.map(artist => {
          return artist.artist;
        });
        const artistsData = [];
        for (let i = 0; i < allArtists.length; i++) {
          if (!artistsData.includes(allArtists[i])) {
            artistsData.push(allArtists[i]);
          }
        }
        this.setState({
          artists: artistsData
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchFavorites(start) {
    axios
      .get('/favorites', {
        params: {
          start: start,
          limit: '10'
        }
      })
      .then(response => {
        // console.log('Fetching favorites: ', response.data);
        this.setState({
          favorites: [...this.state.favorites, ...response.data]
        });
      })
      .catch(error => {
        console.log('Error fetching favorites: ', error);
      });
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
        this.fetchFavorites(this.state.favePageCount);
      });
  }

  filterByDepartment(dept) {
    console.log('Filtering by dept: ', dept);
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
            european: response.data
          });
        } else if (dept === 21) {
          this.setState({
            modern: response.data
          });
        } else {
          this.setState({
            drawings: response.data
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
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
        this.setState({
          searched: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleScrollArtworks() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    } else {
      this.setState({ artPageCount: this.state.artPageCount + 10 })
      console.log('Fetch more list items!', this.state.artPageCount);
    }
    return this.fetchArtworks(this.state.artPageCount);
  }


  handleScrollFavorites() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    } else {
      this.setState({ favePageCount: this.state.favePageCount + 10 })
      console.log('Fetch more list items!', this.state.favePageCount);
    }
    return this.fetchFavorites(this.state.favePageCount);
  }

  componentDidMount() {
    this.fetchArtworks(this.state.artPageCount);
    this.fetchFavorites(this.state.favePageCount);
    this.fetchArtists();
  }

  render() {
    return (
      <>
        <Router>
          <Header
            fetchArtworks={this.fetchArtworks}
            fetchFavorites={this.fetchFavorites}
            filterByDepartment={this.filterByDepartment}
            captureInput={this.captureSearchInput}
            userInput={this.state.userInput}
            searchForArtist={this.searchForArtist}
          />
          <Switch>
            <Route path='/' exact render={props => (
              <Artworks {...props}
                artworks={this.state.artworks}
                addFavorite={this.addFavorite}
                favorites={this.state.favorites}
                handleScroll={this.handleScrollArtworks}
              />
            )} />
            <Route path='/favorites' render={props => (
              <Favorites {...props} favorites={this.state.favorites} handleScroll={this.handleScrollFavorites} />
            )} />
            <Route path='/explore/modern' render={props => (
              <Modern {...props}
                modern={this.state.modern}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
              />
            )} />
            <Route path='/explore/european' render={props => (
              <European {...props}
                european={this.state.european}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
              />
            )} />
            <Route path='/explore/prints' render={props => (
              <Prints {...props}
                drawings={this.state.drawings}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
              />
            )} />
            <Route path='/explore/artists' render={props => (
              <Artists {...props} artists={this.state.artists} />
            )} />
            <Route path={`/search/${this.state.userInput}`} render={props => (
              <Searched {...props}
                searched={this.state.searched}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
              />
            )} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
