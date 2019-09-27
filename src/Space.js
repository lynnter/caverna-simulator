import React, { Component } from 'react'

export class Space extends Component {

  render() {
    const forest = this.props.grid.isForest;
    const meadow = this.props.grid.isMeadow;
    const field = this.props.grid.isField;
    const pasture = this.props.grid.isPasture;

    return (
      <div className="GridStyle">{this.props.grid.id} 
          <br />
        
          <b>{forest ? 'Forest' : null}</b> 
          <br />
          <b>{meadow ? 'Meadow' : null}</b> 
          <br />
          <b>{field ? 'Field' : null}</b> 
          <br />
          <b>{pasture ? 'Pasture' : null}</b> 
        

        <div>
          sheeps: {this.props.grid.sheepCount}
        </div>
        <div>
          donkeys: {this.props.grid.donkeyCount}
        </div>
        <div>
          boars: {this.props.grid.boarCount}
        </div>
        <div>
          cows: {this.props.grid.cowCount}
        </div>
      </div>
    )
  }
}

export default Space
