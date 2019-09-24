import React, { Component } from 'react';
import './App.css';
import './GridStyle.css';
import './FullGridStyle.css';

class App extends Component {
  state = {
    playerboard: [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
  }


  render() {
    return (
      <div>
        <div className="App">
            {this.state.playerboard.map(fullGrid => (
                <div className="FullGridStyle">
                    {fullGrid.map(grid => (
                      <div className="GridStyle">{grid}</div>
                    ))}
                </div>
            ))}
        </div>
      </div>
    )
  }

}

export default App;



