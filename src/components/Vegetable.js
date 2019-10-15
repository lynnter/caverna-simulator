import React from 'react'

export class Vegetable extends React.Component {
  divStyle = () => {
      return {
      background: 'orange',
      color: 'black',
      width: '30px',
      height: '30px',
      border: 'solid 1px black',
      fontSize: '12px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      Vegg {this.props.pvegetable.vegetableCount}
      </div>
    )
  }
}

export default Vegetable
