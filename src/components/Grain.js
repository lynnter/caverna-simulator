import React from 'react'

export class Grain extends React.Component {
  divStyle = () => {
      return {
      background: 'yellow',
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
      {this.props.pgrain.grainCount}
      </div>
    )
  }
}

export default Grain
