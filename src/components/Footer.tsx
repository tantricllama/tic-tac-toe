import * as React from 'react';
import { connect } from 'react-redux';
import { newGame, switchPlayer } from '../actions';

export interface Props {
  current: string;
  player: string;
  winner?: string;
  newGame: any;
  switchPlayer: any;
}

class Footer extends React.Component<Props> {
  render() {
    const { current, player, winner, newGame, switchPlayer } = this.props;

    var footerText;
    if (winner === null) {
      footerText = <p>You are <strong className={player}>{player}</strong>, it is <strong className={current}>{current}</strong>'s turn</p>;
    } else if (winner === '') {
      footerText = <p>Game Over, nobody won!</p>;
    } else {
      var text = winner === player ? 'win' : 'lost';
      footerText = <p><strong className={winner}>You {text}!</strong></p>;
    }

    return (
      <div className="footer">
        <div className="left">
          {footerText}
        </div>
        <div className="right">
          <p><span onClick={switchPlayer}>Switch</span> / <span onClick={newGame}>Reset</span></p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: Props) {
  return {
    current: state.current,
    player: state.player,
    winner: state.winner
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    newGame: () => dispatch(newGame()),
    switchPlayer: () => dispatch(switchPlayer())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);