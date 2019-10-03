import React, { Component } from 'react';
import './App.css';
import Forest from './Forest';
import Mountain from './Mountain';
import PersonalSupply from './components/PersonalSupply';
import MainGame from './MainGame';


class App extends Component {
  state = {
    // make a 3x9 array matrix for main board game
    maingame: [
                [
                  {
                    id: 1, 
                    action: 'Drift Mining'
                  },
                  {
                    id: 2,
                    action: 'Excavation'
                  },
                  {
                    id: 3, 
                    action: 'Starting Player'
                  },
                  {
                    id: 4, 
                    action: 'Ruby Mining'
                  },
                  {
                    id: 5, 
                    action: 'random'
                  },
                  {
                    id: 6, 
                    action: 'random'
                  },
                  {
                    id: 7, 
                    action: 'random'
                  },
                  {
                    id: 8, 
                    action: 'random'
                  },
                  {
                    id: 9, 
                    action: 'random'
                  },
      ],
      [
                  {
                    id: 10, 
                    action: 'Logging'
                  },
                  {
                    id: 11,
                    action: 'Supplies'
                  },
                  {
                    id: 12, 
                    action: 'Ore Mining'
                  },
                  {
                    id: 13, 
                    action: 'Homework'
                  },
                  {
                    id: 14, 
                    action: 'random'
                  },
                  {
                    id: 15, 
                    action: 'random'
                  },
                  {
                    id: 16, 
                    action: 'random'
                  },
                  {
                    id: 17, 
                    action: 'random'
                  },
                  {
                    id: 18, 
                    action: 'random'
                  },
    ],
    [
                  {
                    id: 19, 
                    action: 'Wood Gathering'
                  },
                  {
                    id: 20,
                    action: 'Clearing'
                  },
                  {
                    id: 21, 
                    action: 'Sustenance'
                  },
                  {
                    id: 22, 
                    action: 'Slash-and-Burn'
                  },
                  {
                    id: 23, 
                    action: 'random'
                  },
                  {
                    id: 24, 
                    action: 'random'
                  },
                  {
                    id: 25, 
                    action: 'random'
                  },
                  {
                    id: 26, 
                    action: 'random'
                  },
                  {
                    id: 27, 
                    action: 'random'
                  }
  ],
],
    personal : [{
                  coinCount: 2,
                  foodCount: 1, 
                  woodCount: 0,
                  stoneCount: 0,
                  oreCount: 0,
                  rubyCount: 0,
                  grainCount: 0,
                  vegetableCount: 0
    }
    ],
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
                      tileType: 'entry-level dwelling',
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
        <h1>Caverna</h1>

        <MainGame />

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

            <div>
              <div className="PersonalSupply">
                <h3>Personal Supply</h3>
                {this.state.personal.map((pSupply, idx) => ( 
                  <PersonalSupply
                  psupply={pSupply}
                  key={idx}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default App;



