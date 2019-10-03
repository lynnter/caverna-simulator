import React from 'react'

export class Ore extends React.Component {
  divStyle = () => {
      return {
      background: 'black',
      color: 'white',
      width: '40px',
      height: '40px',
      border: 'solid 2px black',
      fontSize: '30px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      {this.props.pore.oreCount}
      </div>
    )
  }
}

export default Ore
