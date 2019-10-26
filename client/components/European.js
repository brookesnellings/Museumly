import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function European(props) {
    const department = props.european;
    const department1 = department.slice(0, Math.ceil(department.length / 3));
    const department2 = department.slice(
        Math.ceil(department.length / 3),
        Math.ceil((2 * department.length) / 3)
    );
    const department3 = department.slice(Math.ceil((2 * department.length) / 3), department.length);
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {department1.map(artwork => {
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
                        {department2.map(artwork => {
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
                        {department3.map(artwork => {
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
                </Row>
            </Container>
        </>
    );
}
export default European;
