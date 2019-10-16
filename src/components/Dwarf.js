import React from 'react'

export class Dwarf extends React.Component {

  divStyle = () => {
      return {
      background: 'purple',
      color: 'black',
      width: '40px',
      height: '40px',
      border: 'solid 2px black',
      fontSize: '15px',
      margin: '5px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      </div>
    )
  }
}

export default Dwarf
