import React from 'react'

export class Coin extends React.Component {
  divStyle = () => {
      return {
      background: 'orange',
      width: '40px',
      height: '40px',
      border: 'solid 2px red',
      fontSize: '30px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      {this.props.pcoin.coinCount}
      </div>
    )
  }
}

export default Coin
