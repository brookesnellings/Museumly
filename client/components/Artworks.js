import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Artworks(props) {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      props.handleScroll(10)
    });
    return () => window.removeEventListener('scroll', () => { props.handleScroll(10) });
  }, []);


  const artworks1 = props.artworks.slice(0, Math.ceil(props.artworks.length / 3));
  const artworks2 = props.artworks.slice(
    Math.ceil(props.artworks.length / 3),
    Math.ceil((2 * props.artworks.length) / 3)
  );
  const artworks3 = props.artworks.slice(
    Math.ceil((2 * props.artworks.length) / 3),
    props.artworks.length
  );
  return (
    <div>
      <Container>
        <Row >
          <Col >
            {artworks1.map(artwork => {
              let favoriteIDs = props.favorites.map(favorite => {
                return favorite.artwork_id;
              });
              if (favoriteIDs.includes(artwork.artwork_id)) {
                return (
                  <Row className="artBox" key={Math.random()} >
                    <Image
                      key={artwork.artwork_id} src={artwork.image}
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
                  <Row className="artBox" key={Math.random()}>
                    <Image
                      key={artwork.artwork_id} src={artwork.image}
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
            {artworks2.map(artwork => {
              let favoriteIDs = props.favorites.map(favorite => {
                return favorite.artwork_id;
              });
              if (favoriteIDs.includes(artwork.artwork_id)) {
                return (
                  <Row className="artBox" key={Math.random()}>
                    <Image
                      key={artwork.artwork_id} src={artwork.image}
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
                  <Row className="artBox" key={Math.random()}>
                    <Image
                      key={artwork.artwork_id} src={artwork.image}
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
            {artworks3.map(artwork => {
              let favoriteIDs = props.favorites.map(favorite => {
                return favorite.artwork_id;
              });
              if (favoriteIDs.includes(artwork.artwork_id)) {
                return (
                  <Row className="artBox" key={Math.random()}>
                    <Image
                      key={artwork.artwork_id} src={artwork.image}
                      onClick={() => {
                        console.log('clicked!', artwork.artwork_id);
                      }}
                      fluid
                    />
                    <Button
                      variant="link"
                      className="searchIcon"
                      onClick={() => {
                        console.log('I heart this!', artwork.artwork_id);
                        props.addFavorite(artwork.artwork_id);
                      }}
                    >
                      <i className="fas fa-heart"></i>
                    </Button>
                  </Row>
                );
              } else {
                return (
                  <Row className="artBox" key={Math.random()}>
                    <Image
                      key={artwork.artwork_id} src={artwork.image}
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

export default Artworks;
