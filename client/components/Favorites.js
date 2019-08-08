import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

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
              <Row>
                <Image src={artwork.image} fluid />
              </Row>
            ))}
          </Col>
          <Col>
            {favorites2.map(artwork => (
              <Row>
                <Image src={artwork.image} fluid />
              </Row>
            ))}
          </Col>
          <Col>
            {favorites3.map(artwork => (
              <Row>
                <Image src={artwork.image} fluid />
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Favorites;
