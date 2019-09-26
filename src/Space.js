import React, { Component } from 'react'

export class Space extends Component {

  render() {
    console.log(this.props.grid)
    return (
      <div className="GridStyle">{this.props.grid.id}</div>
    )
  }
}

export default Space
