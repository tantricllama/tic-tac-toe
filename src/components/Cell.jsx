import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { takeTurn } from '../actions';

class Cell extends React.Component {
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

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    winner: state.winner,
    winningCells: state.winningCells
  };
}

function mapDispatchToProps(dispatch) {
  return {
    takeTurn: (row, col) => dispatch(takeTurn(row, col))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);