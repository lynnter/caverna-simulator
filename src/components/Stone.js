import React from 'react'

export class Stone extends React.Component {
  divStyle = () => {
      return {
      background: '#5d6268',
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
     {this.props.pstone.stoneCount}
     </div>
    )
  }
}

export default Stone
