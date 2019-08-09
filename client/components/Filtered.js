import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Filtered(props) {
  const filtered1 = props.filtered.slice(0, Math.ceil(props.filtered.length / 3));
  const filtered2 = props.filtered.slice(
    Math.ceil(props.filtered.length / 3),
    Math.ceil((2 * props.filtered.length) / 3)
  );
  const filtered3 = props.filtered.slice(
    Math.ceil((2 * props.filtered.length) / 3),
    props.filtered.length
  );
  return (
    <div id="wholethang">
      <Container>
        <Row>
          <Col>
            {filtered1.map(artwork => {
              let favoriteIDs = props.favorites.map(favorite => {
                return favorite.artwork_id;
              });
              console.log('Garrett is the best', favoriteIDs);
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
            {filtered2.map(artwork => {
              let favoriteIDs = props.favorites.map(favorite => {
                return favorite.artwork_id;
              });
              console.log('Garrett is the best', favoriteIDs);
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
            {filtered3.map(artwork => {
              let favoriteIDs = props.favorites.map(favorite => {
                return favorite.artwork_id;
              });
              console.log('Garrett is the best', favoriteIDs);
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
export default Filtered;
