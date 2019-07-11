import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { takeTurn } from '../actions';

type Props = {
  value: string;
  row: number;
  col: number;
  takeTurn: any;
  winner: string;
  winningCells: number[][];
}

class Cell extends React.Component<Props> {
  render() {
    const { value, takeTurn, row, col, winner, winningCells } = this.props;
    var classes = {
      cell: true,
      [value]: true,
      loss: winner === ''
    };

    winningCells.forEach(function(cells) {
      if (cells[0] === row && cells[1] === col) {
        classes.win = true;
      }
    });

    return (
      <div className={classNames(classes)} onClick={() => takeTurn(row, col)}>{value}</div>
    );
  }
}

function mapStateToProps(state: Props) {
  return {
    winner: state.winner,
    winningCells: state.winningCells
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    takeTurn: (row: number, col: number) => dispatch(takeTurn(row, col))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);