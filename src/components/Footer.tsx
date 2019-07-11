import * as React from 'react';
import { connect } from 'react-redux';
import { newGame } from '../actions';

export interface Props {
  player: string;
  winner?: string;
  newGame: any;
}

class Footer extends React.Component<Props> {
  render() {
    const { player, winner, newGame } = this.props;

    var footerText;
    if (winner === null) {
      footerText = <p>Player: <strong className={player}>{player}</strong></p>;
    } else if (winner === '') {
      footerText = <p>Game Over, nobody won!</p>;
    } else {
      footerText = <p><strong className={winner}>{winner}</strong> won!</p>;
    }

    return (
      <div className="footer">
        <div className="left">
          {footerText}
        </div>
        <div className="right">
          <p><span onClick={newGame}>Reset</span></p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: Props) {
  return {
    player: state.player,
    winner: state.winner
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    newGame: () => dispatch(newGame())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);