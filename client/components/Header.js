import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>  <Link style={{ color: 'black' }} to={"/"}> Museumly</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              to="/"
              onSelect={() => {
                props.fetchArtworks();
              }}
            >
              Artworks
            </Link>
            <Link
              to="/favorites"
              onSelect={() => {
                props.fetchFavorites();
              }}
            >
              Favorites
            </Link>
            <NavDropdown title="Explore By" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#modern"
                onSelect={() => {
                  console.log('clicked on modern art');
                  props.filterByDepartment(21);
                }}
              >
                Modern Art
              </NavDropdown.Item>
              <NavDropdown.Item> <Link
                to="/european"
                onSelect={() => {
                  console.log('clicked on european paintings');
                  props.filterByDepartment(11);
                }}
              >
                European Paintings</Link>
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
    </div>
  );
}

export default withRouter(Header);