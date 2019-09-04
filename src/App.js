import React, { Component } from 'react';
import './App.css';
import Coordinate from './components/Coordinate'
import CoordinateAdd from './components/CoordinateAdd'
import Map from './Map'

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';




class App extends Component {
  state = {
    coordinates: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ coordinates: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/coordinate');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div>
      <Map/>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>세로위치</TableCell>
              <TableCell>가로위치</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.coordinates ? this.state.coordinates.map(c => {
              return <Coordinate key={c.id} id={c.id} name={c.name} row={c.row} col={c.col} />
            }) : ''}
          </TableBody>
        </Table>
        <CoordinateAdd />
      </div>
    );
  }

}

export default App;
