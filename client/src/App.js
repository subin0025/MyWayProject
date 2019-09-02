import React, {Component} from 'react';
import './App.css';
import './components/Coordinate'
import Coordinate from './components/Coordinate';

const coordinates = [
  {
    id:"1",
    name:"덕천",
    row:1,
    col:1

  },
  {
    id:"2",
    name:"만덕",
    row:1,
    col:2
  },
  {
    id:"3",
    name:"화명",
    row:0,
    col:1
  },

];
class App extends Component {
  render(){
  return (
    <div>
      {coordinates.map(c=>{
        return <Coordinate key={c.id} id={c.id} name={c.name} row={c.row} col={c.col}/>
      })}
    </div>
  );
  }
}

export default App;
