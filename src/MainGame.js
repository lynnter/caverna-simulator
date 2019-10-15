import React, { Component } from 'react'
import './App.css'
export class MainGame extends Component {


renderGoods = () => {
  if(this.props.mgrid.hasGoods && this.props.mgrid.stoneCount){
    return <div style={this.stoneStyle}>{this.props.mgrid.stoneCount}</div>
  } else if(this.props.mgrid.woodCount){
    return <div style={this.woodStyle}>{this.props.mgrid.woodCount}</div>
  } else if(this.props.mgrid.oreCount){
    return <div style={this.oreStyle}>{this.props.mgrid.oreCount}</div> 
  } else if(this.props.mgrid.rubyCount){
  return <div style={this.rubyStyle}>{this.props.mgrid.rubyCount}</div>
  } else if(this.props.mgrid.foodCount){
  return <div style={this.foodStyle}>{this.props.mgrid.foodCount}</div>  
  } else {
    return null
  }
}

stoneStyle = {
  color: 'black',
  width: '30px',
  height: '30px',
  fontSize: '12px',
  border:  'solid 1px black',
  background: 'grey'
} 
  
foodStyle = {
  color: 'black',
  width: '30px',
  height: '30px',
  fontSize: '12px',
  border: 'solid 1px grey',
  background: 'yellow'
} 

rubyStyle = {
  color: 'black',
  width: '30px',
  height: '30px',
  fontSize: '12px',
  border: 'solid 1px black',
  background: 'red'
} 

oreStyle = {
  color: 'white',
  width: '30px',
  height: '30px',
  fontSize: '12px',
  border: 'solid 1px black',
  background: 'black'
} 


woodStyle = {
  color: 'black',
  width: '30px',
  height: '30px',
  fontSize: '12px',
  border: 'solid 1px black',
  background: '#4b2d21'
} 


  render() {

    console.log("here", this.props.mgrid.hasGoods)
      return (
       
        <div className="FullGridStyle">
            <div className="MainGameStyle">
                {this.props.mgrid.title}
                <br />
                {this.renderGoods()} 
            </div>
        </div>
      )
      
  }
}

export default MainGame
