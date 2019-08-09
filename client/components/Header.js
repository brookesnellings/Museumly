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
                props.showFiltered(false);
                props.showArtists(false);
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
                props.showArtists(false);
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
                  props.showArtists(false);
                }}
              >
                Modern Art
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onSelect={() => {
                  console.log('clicked on european paintings');
                  props.filterByDepartment(11);
                  props.showArtists(false);
                }}
              >
                European Paintings
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                onSelect={() => {
                  console.log('clicked on drawings and prints');
                  props.filterByDepartment(9);
                  props.showArtists(false);
                }}
              >
                Drawings and Prints
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
                onSelect={() => {
                  console.log('clicked on artists');
                  props.showArtists(true);
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
