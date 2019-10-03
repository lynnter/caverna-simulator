import React from 'react'

export class Wood extends React.Component {
  divStyle = () => {
      return {
      background: '#4b2d21',
      width: '40px',
      height: '40px',
      border: 'solid 2px black',
      fontSize: '30px'
    }
  } 

  render() {
    return(
     <div style={this.divStyle()}>
     {this.props.pwood.woodCount}
     </div>
    )
  }
}

export default Wood
