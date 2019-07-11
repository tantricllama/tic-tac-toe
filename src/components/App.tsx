import * as React from 'react';
import Board from './Board';
import Footer from './Footer';

export default class App extends React.Component<any> {
  render() {
    return (
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <Board />
        <Footer />
      </div>
    );
  }
}