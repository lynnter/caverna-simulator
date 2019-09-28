import React, { Component } from 'react';
import './App.css';
import Forest from './Forest';
import Mountain from './Mountain';


class App extends Component {
  state = {
    forest : [
              [
                {
                  id: 1,
                  tileType: 'meadow',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
                  tileType: 'forest',
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
    mountain : [
                  [
                    {
                      id: 13,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                    {
                      id: 14,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                    {
                      id: 15,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                  ],
                  [{
                      id: 16,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                    {
                      id: 17,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                    {
                      id: 18,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                  ],
                  [
                      {
                      id: 19,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                    {
                      id: 20,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                    {
                      id: 21,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                  ],
                    [
                      {
                      id: 22,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                    {
                      id: 23,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                    {
                      id: 24,
                      tileType: 'mountain',
                      furnishingTileType: 'empty',
                      hasOreMine: false,
                      hasRubyMine: false,
                      sheepCount: 0,
                      donkeyCount: 0,
                      boarCount: 0,
                      cowCount: 0,
                    },
                  ]
    ]
    }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="HomeBoard">
              <div>
                {this.state.forest.map((fullGrid, idx) => (
                    <div key={idx} className="FullGridStyle">
                        {fullGrid.map(grid => (
                          <Forest
                            grid={grid} 
                            key={grid.id}
                            />
                        ))}
                    </div>
                ))} 
                </div>
                
                <div>
                  {this.state.mountain.map((fullGrid, idx) => (
                    <div key={idx} className="FullGridStyle">
                        {fullGrid.map(grid => (
                          <Mountain
                            grid={grid} 
                            key={grid.id}
                            />
                        ))}
                    </div>
                  ))} 
                </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default App;



