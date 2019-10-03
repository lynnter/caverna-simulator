import React from 'react'

export class Food extends React.Component {
  divStyle = () => {
      return {
      background: 'yellow',
      color: 'black',
      width: '40px',
      height: '40px',
      border: 'solid 2px grey',
      fontSize: '30px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      {this.props.pfood.foodCount}
      </div>
    )
  }
}

export default Food
