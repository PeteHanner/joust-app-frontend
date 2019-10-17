import React from 'react'
import Weapon from '../components/Weapon'
import Armor from '../components/Armor'
import Horse from '../components/Horse'

class LoadoutContainer extends React.Component {
  render(){
    return(
      <div>
      <Weapon />
      <Armor />
      <Horse />
      </div>
    )
  }
}

export default LoadoutContainer
