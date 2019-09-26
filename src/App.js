import React, { Component } from 'react';
import './App.css';
import './GridStyle.css';
import './FullGridStyle.css';
import Space from './Space';


class App extends Component {
  state = {
    forest : [
              [
                {
                  id: 1,
                  isMeadow: true,
                },
                 {
                  id: 2,
                  isMeadow: true
                },
                {
                  id: 3,
                  isMeadow: true
              }
              ], 
              [{
                  id: 3,
                  isMeadow: true
                },
                {
                  id: 4,
                  isMeadow: true
                },
                {
                  id: 5,
                  isMeadow: true
                }
              ], 
              [
                {
                  id: 6,
                  isMeadow: true
                },
                 {
                  id: 7,
                  isMeadow: true
                },
                {
                  id: 8,
                  isMeadow: true
                }
              ], 
              [
                {
                  id: 9,
                  isMeadow: true
                },
                {
                  id: 10,
                  isMeadow: true
                },
                 {
                  id: 11,
                  isMeadow: true
                }
              ]
    ],
      isForest : true,
      isField : false,
    }

  render() {
  console.log("hereee", this.state.grid)
    return (
      <React.Fragment>
      <div>
        <div className="App">
            {this.state.forest.map((fullGrid, idx) => (
                <div key={idx} className="FullGridStyle">
                    {fullGrid.map(grid => (
                      <Space
                        grid={grid} 
                        key={grid.id}
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



