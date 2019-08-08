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
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form
            onChange={e => {
              console.log(e.target.value);
              props.captureInput(e.target.value);
            }}
            inline
          >
            <FormControl type="text" placeholder="Search by Artist" className="mr-sm-2" />
            <Button
              variant="outline-success"
              onClick={() => {
                console.log('clickety clicked');
                props.searchForArtist(props.userInput);
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
