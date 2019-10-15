import React from 'react'

export class Ore extends React.Component {
  divStyle = () => {
      return {
      background: 'black',
      color: 'white',
      width: '30px',
      height: '30px',
      border: 'solid 1px black',
      fontSize: '12px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      Ore {this.props.pore.oreCount}
      </div>
    )
  }
}

export default Ore
