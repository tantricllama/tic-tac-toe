import * as React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

type Props = {
  board: string[][];
}

class Board extends React.Component<Props> {
  render() {
    const { board } = this.props;

    return (
      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((value, colIndex) =>
            <Cell key={rowIndex + '_' + colIndex} value={value} row={rowIndex} col={colIndex} />
          ))}
      </div>
    );
  }
}

function mapStateToProps(state: Props) {
  return {
    board: state.board
  };
}

export default connect(mapStateToProps)(Board);