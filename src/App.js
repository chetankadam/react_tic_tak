import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button 
        className="square" 
        onClick = {() => {this.props.onClick()}
      } >
      {this.props.value}
      </button>
    );
  }
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    
    const squares = this.state.squares.splice();
    squares[i] = 'X';
    this.setState({squares: squares});
    console.log("this--->",this);
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
      onClick =  {() => this.handleClick(i)}
    />;
  }

  render(){
    const status = 'Next Player: X';
    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
class Game extends React.Component {
  render(){
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board/>
          </div>
          <div>
            {/* Status */}
          </div>
          <ol>
            {/* TODO */}
          </ol>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Game/>
    );
  }


  
}

export default App;
