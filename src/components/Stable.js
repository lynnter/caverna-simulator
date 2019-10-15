import React from 'react'

export class Stable extends React.Component {
  divStyle = () => {
      return {
      background: 'purple',
      color: 'black',
      width: '40px',
      height: '40px',
      border: 'solid 1px black',
      fontSize: '12px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      Stable {this.props.pstable.stableCount}
      </div>
    )
  }
}

export default Stable
