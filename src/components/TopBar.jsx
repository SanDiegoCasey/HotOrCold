import React from 'react';

class TopBar extends React.Component {
  render() {
    return (
      <nav className="TopBar">
        <span className="What">
          What?
        </span>
        <span className="newGame">+NEW GAME</span>
      </nav>
    );
  }
}
export default TopBar;
