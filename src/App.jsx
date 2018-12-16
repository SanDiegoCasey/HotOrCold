import React from 'react';
import TopBar from './components/TopBar';
import TitleBar from './components/TitleBar';
import GuessBar from './components/GuessBar';
import ResultBar from './components/ResultBar';
import TryButton from './components/TryButton';
import GuessNumber from './components/GuessNumber';

class App extends React.Component {
  render() {
    console.log("rendered");
    return (
      <div>
        <TopBar />
        <main className="container">
          <TitleBar />
          <GuessBar />
          <ResultBar />
          <TryButton />
      <GuessNumber />
        </main>
      </div>
    );
  }
}

export default App;
