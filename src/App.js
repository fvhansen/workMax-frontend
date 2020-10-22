import React, {Component} from 'react';
import Counter from "./Counter";
import './App.css';
import HighscoreList from "./HighscoreList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>WorkMax</h1>
        <h2>Better start working bitch</h2>
        <Counter />
        <Counter />
        <HighscoreList />
      </div>
      
    )
  };
  
}

export default App;
