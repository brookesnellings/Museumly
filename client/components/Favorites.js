import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Favorites(props) {
  const favorites1 = props.favorites.slice(0, Math.ceil(props.favorites.length / 3));
  const favorites2 = props.favorites.slice(
    Math.ceil(props.favorites.length / 3),
    Math.ceil((2 * props.favorites.length) / 3)
  );
  const favorites3 = props.favorites.slice(
    Math.ceil((2 * props.favorites.length) / 3),
    props.favorites.length
  );
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {favorites1.map(artwork => (
              <Row className="artBox">
                <Image src={artwork.image} fluid />
                <Button variant="link" className="searchIcon">
                  <i className="far fa-heart"></i>
                </Button>
              </Row>
            ))}
          </Col>
          <Col>
            {favorites2.map(artwork => (
              <Row className="artBox">
                <Image src={artwork.image} fluid />
                <Button variant="link" className="searchIcon">
                  <i className="far fa-heart"></i>
                </Button>
              </Row>
            ))}
          </Col>
          <Col>
            {favorites3.map(artwork => (
              <Row className="artBox">
                <Image src={artwork.image} fluid />
                <Button variant="link" className="searchIcon">
                  <i className="far fa-heart"></i>
                </Button>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Favorites;
