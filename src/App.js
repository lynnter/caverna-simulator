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
                  isForest: false,
                  isMeadow: true,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                },
                 {
                  id: 2,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                },
                {
                  id: 3,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
              }
              ], 
              [{
                  id: 4,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                },
                {
                  id: 5,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                },
                {
                  id: 6,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                }
              ], 
              [
                {
                  id: 7,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                },
                 {
                  id: 8,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                },
                {
                  id: 9,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                }
              ], 
              [
                {
                  id: 10,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                },
                {
                  id: 11,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                },
                 {
                  id: 12,
                  isForest: true,
                  isMeadow: false,
                  isField: false,
                  hasPasture: false,
                  hasStable: false,
                  stableCount: 0,
                  sheepCount: 0,
                  donkeyCount: 0,
                  boarCount: 0,
                  cowCount: 0,
                }
              ]
    ],
    }

  render() {
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



