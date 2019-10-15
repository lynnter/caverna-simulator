import React from 'react'

export class Grain extends React.Component {
  divStyle = () => {
      return {
      background: 'yellow',
      color: 'black',
      width: '30px',
      height: '30px',
      border: 'solid 1px black',
      fontSize: '12px',
      margin: '5px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      Grain {this.props.pgrain.grainCount}
      </div>
    )
  }
}

export default Grain
