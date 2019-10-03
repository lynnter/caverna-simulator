import React, { Component } from 'react'
import './App.css'
export class MainGame extends Component {

  render() {
    console.log("in main", this.props.mgrid)
      return (
        <div className="FullGridStyle">
            <div className="MainGameStyle">
                {this.props.mgrid.title}
            </div>
        </div>
      )
  }
}

export default MainGame
