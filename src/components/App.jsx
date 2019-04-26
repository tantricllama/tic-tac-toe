import React from 'react';
import Board from './Board.jsx';
import Footer from './Footer.jsx';

export default function App() {
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board />
      <Footer />
    </div>
  );
}