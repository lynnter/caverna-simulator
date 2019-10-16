import React from 'react'
import Stable from './Stable'
import Wood from './Wood'
import Stone from './Stone'
import Ore from './Ore'
import Ruby from './Ruby'
import Grain from './Grain'
import Vegetable from './Vegetable'
import Food from './Food'
import Coin from './Coin'
import '../App.css'

function PersonalSupply(props) {
     return (
          <div className="FlexPersonalSupply">
               <Stable pstable={props.psupply}/>
               <Wood pwood={props.psupply}/>
               <Stone pstone={props.psupply}/>
               <Ore pore={props.psupply}/>
               <Ruby pruby={props.psupply}/>
               <Grain pgrain={props.psupply}/>
               <Vegetable pvegetable={props.psupply}/>
               <Coin pcoin={props.psupply}/>
               <Food pfood={props.psupply}/>
          </div>
     )
}

export default PersonalSupply
