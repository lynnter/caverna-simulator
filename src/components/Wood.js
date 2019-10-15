import React from 'react'

export class Wood extends React.Component {
  divStyle = () => {
      return {
      background: '#4b2d21',
      width: '30px',
      height: '30px',
      border: 'solid 1px black',
      fontSize: '12px'
    }
  } 

  render() {
    return(
     <div style={this.divStyle()}>
     Wood {this.props.pwood.woodCount}
     </div>
    )
  }
}

export default Wood
