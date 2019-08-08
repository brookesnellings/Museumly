import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Departments(props) {
  let department;
  if (props.showModern) {
    department = props.modern;
  } else {
    department = props.european;
  }
  const department1 = department.slice(0, Math.ceil(department.length / 3));
  const department2 = department.slice(
    Math.ceil(department.length / 3),
    Math.ceil((2 * department.length) / 3)
  );
  const department3 = department.slice(Math.ceil((2 * department.length) / 3), department.length);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {department1.map(artwork => (
              <Row>
                <Image src={artwork.image} fluid />
              </Row>
            ))}
          </Col>
          <Col>
            {department2.map(artwork => (
              <Row>
                <Image src={artwork.image} fluid />
              </Row>
            ))}
          </Col>
          <Col>
            {department3.map(artwork => (
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

export default Departments;
