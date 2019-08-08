import React from 'react';
import { Table, Image } from 'react-bootstrap';

class Artworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.showArtworks && (
          <Table responsive>
            <tbody>
              <tr>
                <td>
                  <Image
                    src={'https://images.metmuseum.org/CRDImages/ad/original/123908.jpg'}
                    fluid
                  />
                </td>
                <td>
                  <Image
                    src={'https://images.metmuseum.org/CRDImages/ad/original/DP105063.jpg'}
                    fluid
                  />
                </td>
                <td>
                  <Image
                    src={'https://images.metmuseum.org/CRDImages/ad/original/192570.jpg'}
                    fluid
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src={'https://images.metmuseum.org/CRDImages/ad/original/191549.jpg'}
                    fluid
                  />
                </td>
                <td>
                  <Image
                    src={'https://images.metmuseum.org/CRDImages/ad/original/DP220460.jpg'}
                    fluid
                  />
                </td>
                <td>
                  <Image
                    src={'https://images.metmuseum.org/CRDImages/ad/original/243157.jpg'}
                    fluid
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}

export default Artworks;
