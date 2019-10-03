import React from 'react'

export class Vegetable extends React.Component {
  divStyle = () => {
      return {
      background: 'orange',
      color: 'black',
      width: '40px',
      height: '40px',
      border: 'solid 2px black',
      fontSize: '30px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      {this.props.pvegetable.vegetableCount}
      </div>
    )
  }
}

export default Vegetable
