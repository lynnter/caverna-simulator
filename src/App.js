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
                    title: 'Drift Mining'
                  },
                  {
                    id: 2,
                    title: 'Excavation'
                  },
                  {
                    id: 3, 
                    title: 'Starting Player'
                  },
                  {
                    id: 4, 
                    title: 'Ruby Mining'
                  },
                  {
                    id: 5, 
                    title: 'Round 1'
                  },
                  {
                    id: 6, 
                    title: 'Round 4'
                  },
                  {
                    id: 7, 
                    title: 'Round 7'
                  },
                  {
                    id: 8, 
                    title: 'Round 10'
                  },
                ],
                [
                  {
                    id: 9, 
                    title: 'Logging'
                  },
                  {
                    id: 10,
                    title: 'Supplies'
                  },
                  {
                    id: 11, 
                    title: 'Ore Mining'
                  },
                  {
                    id: 12, 
                    title: 'Homework'
                  },
                  {
                    id: 13, 
                    title: 'Round 2'
                  },
                  {
                    id: 14, 
                    title: 'Round 5'
                  },
                  {
                    id: 15, 
                    title: 'Round 8'
                  },
                  {
                    id: 16, 
                    title: 'Round 11'
                  }
                ],
                [ 
                  {
                    id: 17, 
                    title: 'Wood Gathering'
                  },
                  {
                    id: 18,
                    title: 'Clearing'
                  },
                  {
                    id: 19, 
                    title: 'Sustenance'
                  },
                  {
                    id: 20, 
                    title: 'Slash-and-Burn'
                  },
                  {
                    id: 21, 
                    title: 'Round 3'
                  },
                  {
                    id: 22, 
                    title: 'Round 6'
                  },
                  {
                    id: 23, 
                    title: 'Round 9'
                  },
                  {
                    id: 24, 
                    title: 'Round 12'
                  },
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
    console.log("MAIN", this.state.maingame)
    return (
      <React.Fragment>
        <div className="App">
        <h1>Caverna</h1>

        <div>
          {this.state.maingame.map((fullGrid, idx) => (
            <div key={idx} className="FullGridStyle">
              {fullGrid.map(mgrid => (
                <MainGame
                  mgrid={mgrid}
                  key={mgrid.id}
                  />
              ))}
            </div>
          ))}
        </div>

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



