import React from 'react'

export class Ruby extends React.Component {
  divStyle = () => {
      return {
      background: 'red',
      color: 'white',
      width: '40px',
      height: '40px',
      border: 'solid 2px black',
      fontSize: '30px'
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      {this.props.pruby.rubyCount}
      </div>
    )
  }
}

export default Ruby
