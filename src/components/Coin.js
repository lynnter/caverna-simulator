import React from 'react'

export class Coin extends React.Component {
  divStyle = () => {
      return {
      background: 'orange',
      width: '30px',
      height: '30px',
      border: 'solid 1px red',
      fontSize: '12px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      Coin {this.props.pcoin.coinCount}
      </div>
    )
  }
}

export default Coin
