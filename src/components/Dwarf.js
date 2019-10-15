import React from 'react'

export class Dwarf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {level: 0};
  }

  divStyle = () => {
      return {
      background: 'purple',
      color: 'black',
      width: '40px',
      height: '40px',
      border: 'solid 2px black',
      fontSize: '15px',
    }
  } 

  render() {
    return(
      <div style={this.divStyle()}>
      LVL: {this.state.level}
      </div>
    )
  }
}

export default Dwarf
