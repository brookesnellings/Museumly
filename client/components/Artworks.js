import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Artworks(props) {
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
        <Row>
          <Col>
            {artworks1.map(artwork => (
              <Row>
                <Image src={artwork.image} fluid />
              </Row>
            ))}
          </Col>
          <Col>
            {artworks2.map(artwork => (
              <Row>
                <Image src={artwork.image} fluid />
              </Row>
            ))}
          </Col>
          <Col>
            {artworks3.map(artwork => (
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

export default Artworks;
