import React from 'react'

export class Ruby extends React.Component {
  divStyle = () => {
      return {
      background: 'red',
      color: 'white',
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
      Ruby {this.props.pruby.rubyCount}
      </div>
    )
  }
}

export default Ruby
