import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Header(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>  <Link style={{ color: 'black' }} to={"/"}> Museumly</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer
              to="/">
              <Nav.Link
                onSelect={() => {
                  props.fetchArtworks();
                }}
              >
                Artworks
              </Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/favorites"
              onSelect={() => {
                props.fetchFavorites();
              }}
            >
              Favorites
            </LinkContainer>
            <NavDropdown title="Explore By" id="basic-nav-dropdown">
              <NavDropdown.Item onSelect={() => {
                console.log('clicked on modern art');
                props.filterByDepartment(21);
              }}>
                <LinkContainer to="/explore/modern"
                >
                </LinkContainer>
                Modern Art
              </NavDropdown.Item>
              <NavDropdown.Item onSelect={() => {
                console.log('clicked on european paintings');
                props.filterByDepartment(11);
              }}> <LinkContainer
                to="/explore/european"
              >
                  European Paintings</LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#prints"
                onSelect={() => {
                  console.log('clicked on drawings and prints');
                  props.filterByDepartment(9);
                }}
              >
                Drawings and Prints
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#artists"
                onSelect={() => {
                  console.log('clicked on artists');
                }}
              >
                Artists
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form
            onChange={e => {
              console.log(e.target.value);
              props.captureInput(e.target.value);
            }}
            inline
          >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button
              variant="link"
              className="searchIcon"
              onClick={() => {
                console.log('clickety clicked');
                props.searchForArtist();
              }}
            >
              {/* <i className="fas fa-search"></i> */}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default withRouter(Header);