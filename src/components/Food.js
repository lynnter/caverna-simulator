import React from 'react'

export class Food extends React.Component {
  divStyle = () => {
      return {
      background: 'yellow',
      color: 'black',
      width: '30px',
      height: '30px',
      border: 'solid 2px grey',
      fontSize: '12px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      Food {this.props.pfood.foodCount}
      </div>
    )
  }
}

export default Food
