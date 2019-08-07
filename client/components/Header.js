import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Favorites from './Favorites';
import Artworks from './Artworks';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavorites: false
    };
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Museumly</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#collections">Collections</Nav.Link>
              <Nav.Link
                href="#favorites"
                onSelect={() => {
                  this.setState({ showFavorites: true });
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
            <Form inline>
              <FormControl type="text" placeholder="Search by Artist" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Artworks showArtworks={!this.state.showFavorites} />
        <Favorites showFavorites={this.state.showFavorites} />
      </div>
    );
  }
}

export default Header;
