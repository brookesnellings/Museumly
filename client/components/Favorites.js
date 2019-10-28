import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Favorites(props) {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      props.handleScroll()
    });
    return () => window.removeEventListener('scroll', () => { props.handleScroll() });
  }, []);

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
    <>
      <Container>
        <Row>
          <Col>
            {favorites1.map(artwork => (
              <Row className="artBox" key={Math.random()}>
                <Image src={artwork.image} fluid />
                <Button variant="link" className="searchIcon">
                  <i className="fas fa-heart"></i>
                </Button>
              </Row>
            ))}
          </Col>
          <Col>
            {favorites2.map(artwork => (
              <Row className="artBox" key={Math.random()}>
                <Image src={artwork.image} fluid />
                <Button variant="link" className="searchIcon">
                  <i className="fas fa-heart"></i>
                </Button>
              </Row>
            ))}
          </Col>
          <Col>
            {favorites3.map(artwork => (
              <Row className="artBox" key={Math.random()}>
                <Image src={artwork.image} fluid />
                <Button variant="link" className="searchIcon">
                  <i className="fas fa-heart"></i>
                </Button>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Favorites;
