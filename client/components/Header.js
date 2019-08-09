import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Header(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Museumly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="#collections"
              onSelect={() => {
                props.showFavorites(false);
                props.showSearched(false);
              }}
            >
              Collections
            </Nav.Link>
            <Nav.Link
              href="#favorites"
              onSelect={() => {
                props.showFavorites(true);
                props.showSearched(false);
                props.fetchFavorites();
              }}
            >
              Favorites
            </Nav.Link>
            <NavDropdown title="Explore By" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#action/3.1"
                onSelect={() => {
                  console.log('clicked on modern art');
                  props.filterByDepartment(21);
                }}
              >
                Modern Art
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onSelect={() => {
                  console.log('clicked on european paintings');
                  props.filterByDepartment(11);
                }}
              >
                European Paintings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drawings and Prints</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Artists</NavDropdown.Item>
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
                props.searchForArtist(props.userInput);
                props.showSearched(true);
                props.showFavorites(false);
              }}
            >
              <i className="fas fa-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
