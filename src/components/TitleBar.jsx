import React from 'react';

class TitleBar extends React.Component {
  render() {
    return (
        <div className="TitleBar"><span className="hot">HOT</span> or <span className="cold">COLD</span>
        </div>
    );
  }
}

export default TitleBar;
