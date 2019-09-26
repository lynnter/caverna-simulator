import React, { Component } from 'react';
import './App.css';
import './GridStyle.css';
import './FullGridStyle.css';
import Space from './Space';


class App extends Component {
  state = {
    forest : [
              [{
                'A': {
                  id: 1,
                  isMeadow: true,
                },
                'B': {
                  id: 2,
                  isMeadow: true
                },
                'C': {
                  id: 3,
                  isMeadow: true
              }
              }], 
              [{
                'D': {
                  id: 3,
                  isMeadow: true
                },
                'E': {
                  id: 4,
                  isMeadow: true
                },
                'F': {
                  id: 5,
                  isMeadow: true
                }
              }], 
              [{
                'G': {
                  id: 6,
                  isMeadow: true
                },
                'H': {
                  id: 7,
                  isMeadow: true
                },
                'I': {
                  id: 8,
                  isMeadow: true
                }
              }], 
              [{
                'J': {
                  id: 9,
                  isMeadow: true
                },
                'K': {
                  id: 10,
                  isMeadow: true
                },
                'L': {
                  id: 11,
                  isMeadow: true
                }
              }]
    ],
      isForest : true,
      isField : false,
    }

  render() {
  console.log("hereee", this.state.forest)
    return (
      <React.Fragment>
      <div>
        <div className="App">
            {this.state.forest.map(fullGrid => (
                <div className="FullGridStyle">
                    {fullGrid.map(grid => (
                      <Space grid={grid} 
                        key={this.id}
                        forest={this.state.forest}
                        />
                    ))}
                </div>
            ))}
        </div>
      </div>
      </React.Fragment>
    )
  }

}

export default App;



