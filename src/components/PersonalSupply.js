import React from 'react'
// import Wood from './Wood'
// import Stone from './Stone'
// import Ore from './Ore'
// import Ruby from './Ruby'
// import Grain from './Grain'
// import Vegetable from './Vegetable'
// import Food from './Food'
import Coin from './Coin'

function PersonalSupply(props) {
     return (
          <div>
               {/* <Wood />
               <Stone />
               <Ore />
               <Ruby />
               <Grain />
               <Vegetable />
               <Food /> */}

               <Coin pcoin={props.psupply}/>
          </div>
     )
}

export default PersonalSupply
