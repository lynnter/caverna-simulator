import React, { Component } from 'react'

export class Space extends Component {

  render() {
    console.log("here", this.props.forest)
    return (
      <div className="GridStyle">{this.props.grid.toString()}</div>
    )
  }
}

export default Space
