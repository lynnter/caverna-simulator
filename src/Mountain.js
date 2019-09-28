import React, { Component } from 'react'

export class Mountain extends Component {

  render() {
    let tileType = this.props.grid.tileType;

    return (
      <div className="MountainStyle">{this.props.grid.id} 
          <br />
        
        <b>{tileType ? tileType : null}</b> 
      
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

export default Mountain