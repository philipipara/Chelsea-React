import React from 'react';
import { Table } from 'reactstrap';

const Stats = (props) => {
  return (
    <Table striped className='table'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Goals</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">Kai</td>
          <td>Havertz</td>
          <th>4</th>
        </tr>
        <tr>
          <td scope="row">Mason</td>
          <td>Mount</td>
          <th>3</th>
        </tr>
        <tr>
          <td scope="row">Callum</td>
          <td>Hudson-Odoi</td>
          <th>2</th>
        </tr>
      </tbody>
    </Table>
  );
}

export default Stats;