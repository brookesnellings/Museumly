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
    <div>
      <Container>
        <Row>
          <Col>
            {filtered1.map(artwork => (
              <Row>
                <Image src={artwork.image} fluid />
              </Row>
            ))}
          </Col>
          <Col>
            {filtered2.map(artwork => (
              <Row>
                <Image src={artwork.image} fluid />
              </Row>
            ))}
          </Col>
          <Col>
            {filtered3.map(artwork => (
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

export default Filtered;
