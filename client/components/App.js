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
      artworks: []
    };
    this.fetchArtworks = this.fetchArtworks.bind(this);
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

  componentDidMount() {
    this.fetchArtworks();
  }

  render() {
    console.log(this.state.artworks);
    return (
      <div>
        <Header />
        <Artworks artworks={this.state.artworks} />
        <Favorites />
      </div>
    );
  }
}

export default App;
