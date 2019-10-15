import React from 'react'

export class Stone extends React.Component {
  divStyle = () => {
      return {
      background: '#5d6268',
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
     Stone {this.props.pstone.stoneCount}
     </div>
    )
  }
}

export default Stone
