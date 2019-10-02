import React from 'react'

export class Coin extends React.Component {
  divStyle = () => {
      return {
      background: 'orange',
      width: '40px',
      height: '40px',
      border: 'solid 2px red'
    }
  } 

  render() {
    return(
      <div className='CoinResource'
        style={this.divStyle()}
      >{this.props.pcoin.coinCount}
      </div>
    )
  }
}

export default Coin
