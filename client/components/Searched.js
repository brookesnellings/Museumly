import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function Searched(props) {
  const searched1 = props.searched.slice(0, Math.ceil(props.searched.length / 3));
  const searched2 = props.searched.slice(
    Math.ceil(props.searched.length / 3),
    Math.ceil((2 * props.searched.length) / 3)
  );
  const searched3 = props.searched.slice(
    Math.ceil((2 * props.searched.length) / 3),
    props.searched.length
  );
  return (
    <div id="wholethang">
      <Container>
        <Row>
          <Col>
            {searched1.map(artwork => {
              let favoriteIDs = props.favorites.map(favorite => {
                return favorite.artwork_id;
              });
              if (favoriteIDs.includes(artwork.artwork_id)) {
                return (
                  <Row className="artBox">
                    <Image
                      key={artwork.artwork_id}
                      src={artwork.image}
                      onClick={() => {
                        console.log('clicked!', artwork.artwork_id);
                      }}
                      fluid
                    />
                    <Button
                      variant="link"
                      className="searchIcon"
                      onClick={() => {
                        console.log('I heart this!');
                        props.addFavorite(artwork.artwork_id);
                      }}
                    >
                      <i className="fas fa-heart"></i>
                    </Button>
                  </Row>
                );
              } else {
                return (
                  <Row className="artBox">
                    <Image
                      key={artwork.artwork_id}
                      src={artwork.image}
                      onClick={() => {
                        console.log('clicked!', artwork.artwork_id);
                      }}
                      fluid
                    />
                    <Button
                      variant="link"
                      className="searchIcon"
                      onClick={() => {
                        console.log('I heart this!');
                        props.addFavorite(artwork.artwork_id);
                      }}
                    >
                      <i className="far fa-heart"></i>
                    </Button>
                  </Row>
                );
              }
            })}
          </Col>
          <Col>
            {searched2.map(artwork => {
              let favoriteIDs = props.favorites.map(favorite => {
                return favorite.artwork_id;
              });
              // console.log('Garrett is the best', favoriteIDs);
              if (favoriteIDs.includes(artwork.artwork_id)) {
                return (
                  <Row className="artBox">
                    <Image
                      key={artwork.artwork_id}
                      src={artwork.image}
                      onClick={() => {
                        console.log('clicked!', artwork.artwork_id);
                      }}
                      fluid
                    />
                    <Button
                      variant="link"
                      className="searchIcon"
                      onClick={() => {
                        console.log('I heart this!');
                        props.addFavorite(artwork.artwork_id);
                      }}
                    >
                      <i className="fas fa-heart"></i>
                    </Button>
                  </Row>
                );
              } else {
                return (
                  <Row className="artBox">
                    <Image
                      key={artwork.artwork_id}
                      src={artwork.image}
                      onClick={() => {
                        console.log('clicked!', artwork.artwork_id);
                      }}
                      fluid
                    />
                    <Button
                      variant="link"
                      className="searchIcon"
                      onClick={() => {
                        console.log('I heart this!');
                        props.addFavorite(artwork.artwork_id);
                      }}
                    >
                      <i className="far fa-heart"></i>
                    </Button>
                  </Row>
                );
              }
            })}
          </Col>
          <Col>
            {searched3.map(artwork => {
              let favoriteIDs = props.favorites.map(favorite => {
                return favorite.artwork_id;
              });
              // console.log('Garrett is the best', favoriteIDs);
              if (favoriteIDs.includes(artwork.artwork_id)) {
                return (
                  <Row className="artBox">
                    <Image
                      key={artwork.artwork_id}
                      src={artwork.image}
                      onClick={() => {
                        console.log('clicked!', artwork.artwork_id);
                      }}
                      fluid
                    />
                    <Button
                      variant="link"
                      className="searchIcon"
                      onClick={() => {
                        console.log('I heart this!');
                        props.addFavorite(artwork.artwork_id);
                      }}
                    >
                      <i className="fas fa-heart"></i>
                    </Button>
                  </Row>
                );
              } else {
                return (
                  <Row className="artBox">
                    <Image
                      key={artwork.artwork_id}
                      src={artwork.image}
                      onClick={() => {
                        console.log('clicked!', artwork.artwork_id);
                      }}
                      fluid
                    />
                    <Button
                      variant="link"
                      className="searchIcon"
                      onClick={() => {
                        console.log('I heart this!');
                        props.addFavorite(artwork.artwork_id);
                      }}
                    >
                      <i className="far fa-heart"></i>
                    </Button>
                  </Row>
                );
              }
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Searched;
