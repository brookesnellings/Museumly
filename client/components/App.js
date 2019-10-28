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
      favePageCount: 0,
      euroPageCount: 0,
      modernPageCount: 0,
      printPageCount: 0
    };

    this.fetchArtworks = this.fetchArtworks.bind(this);
    this.fetchArtists = this.fetchArtists.bind(this);
    this.fetchFavorites = this.fetchFavorites.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.filterByDepartment = this.filterByDepartment.bind(this);
    this.captureSearchInput = this.captureSearchInput.bind(this);
    this.searchForArtist = this.searchForArtist.bind(this);
    // Handle scrolling functions for lazy-loading/infinite scroll
    this.handleScrollArtworks = this.handleScrollArtworks.bind(this);
    this.handleScrollFavorites = this.handleScrollFavorites.bind(this);
    this.handleScrollEuropean = this.handleScrollEuropean.bind(this);
    this.handleScrollModern = this.handleScrollModern.bind(this);
    this.handleScrollPrints = this.handleScrollPrints.bind(this);
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
        // console.log('Fetching artworks: ', response.data);
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

  filterByDepartment(dept, start) {
    // console.log('Filtering by dept: ', dept);
    axios
      .get('/department', {
        params: {
          department: dept,
          start: start,
          limit: '10'
        }
      })
      .then(response => {
        let period;
        if (dept === 11) {
          this.setState({
            european: [...this.state.european, ...response.data]
          });
        } else if (dept === 21) {
          this.setState({
            modern: [...this.state.modern, ...response.data]
          });
        } else {
          this.setState({
            drawings: [...this.state.drawings, ...response.data]
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

  searchForArtist(start) {
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
      // console.log('Fetch more list items!', this.state.artPageCount);
    }
    return this.fetchArtworks(this.state.artPageCount);
  }


  handleScrollFavorites() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    } else {
      this.setState({ favePageCount: this.state.favePageCount + 10 })
      // console.log('Fetch more list items!', this.state.favePageCount);
    }
    return this.fetchFavorites(this.state.favePageCount);
  }


  handleScrollEuropean() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    } else {
      this.setState({ euroPageCount: this.state.euroPageCount + 10 })
      // console.log('Fetch more list items!', this.state.euroPageCount);
    }
    return this.filterByDepartment(11, this.state.euroPageCount);
  }

  handleScrollModern() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    } else {
      this.setState({ modernPageCount: this.state.modernPageCount + 10 })
      // console.log('Fetch more list items!', this.state.modernPageCount);
    }
    return this.filterByDepartment(21, this.state.modernPageCount);
  }

  handleScrollPrints() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    } else {
      this.setState({ printPageCount: this.state.printPageCount + 10 })
      // console.log('Fetch more list items!', this.state.printPageCount);
    }
    return this.filterByDepartment(9, this.state.printPageCount);
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
            euroCount={this.state.euroPageCount}
            modernCount={this.state.modernPageCount}
            printCount={this.state.printPageCount}
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
                handleScroll={this.handleScrollModern}
              />
            )} />
            <Route path='/explore/european' render={props => (
              <European {...props}
                european={this.state.european}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
                handleScroll={this.handleScrollEuropean}
              />
            )} />
            <Route path='/explore/prints' render={props => (
              <Prints {...props}
                drawings={this.state.drawings}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
                handleScroll={this.handleScrollPrints}
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
