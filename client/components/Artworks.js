import React from 'react';
import { Table, Image } from 'react-bootstrap';

class Artworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('in artworks', this.props);

    return (
      <div>
        <Table responsive>
          <tbody>
            <tr>
              <td>
                <Image
                  src={'https://images.metmuseum.org/CRDImages/ep/original/DP352819.jpg'}
                  fluid
                />
              </td>
              <td>
                <Image
                  src={'https://images.metmuseum.org/CRDImages/ma/original/DP-13958-001.jpg'}
                  fluid
                />
              </td>
              {this.props.artworks.map(artwork => (
                <td>
                  <Image src={artwork.image} fluid />
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Artworks;
