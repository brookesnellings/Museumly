import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>  <Link style={{ color: 'black' }} to={"/"}> Museumly</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as="span">
              <Link style={{
                color: 'rgba(0,0,0,.5)'
              }} to="/">
                Artworks</Link>
            </Nav.Link>
            <Nav.Link as="span">
              <Link style={{ color: 'rgba(0,0,0,.5)' }}
                to="/favorites">
                Favorites
            </Link>
            </Nav.Link>
            <NavDropdown title="Explore By" id="basic-nav-dropdown">
              <NavDropdown.Item as="span" onSelect={() => {
                console.log('clicked on modern art');
                props.filterByDepartment(21);
              }}>
                <Link style={{ color: 'black' }} to="/explore/modern"
                >
                  Modern Art
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="span" onSelect={() => {
                console.log('clicked on european paintings');
                props.filterByDepartment(11);
              }}> <Link style={{ color: 'black' }}
                to="/explore/european"
              >
                  European Paintings</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="span"
                onSelect={() => {
                  console.log('clicked on drawings and prints');
                  props.filterByDepartment(9);
                }}
              > <Link style={{ color: 'black' }} to="/explore/prints">
                  Drawings and Prints</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="span"
                onSelect={() => {
                  console.log('clicked on artists');
                }}
              > <Link style={{ color: 'black' }} to="/explore/artists">
                  Artists</Link>
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
                props.history.push(`/search/${props.userInput}`);
              }}
            >
              <i className="fas fa-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default withRouter(Header);