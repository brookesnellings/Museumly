import React from 'react';
import { Table } from 'react-bootstrap';

function Artists(props) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Artists</th>
          </tr>
        </thead>
        <tbody>
          {props.artists.map(artist => {
            return (
              <tr key={Math.random()}>
                <td>{artist}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Artists;
