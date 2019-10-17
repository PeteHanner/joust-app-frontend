import React from 'react'
import Weapon from '../components/Weapon'
import Armor from '../components/Armor'
import Horse from '../components/Horse'
import {Container} from 'semantic-ui-react'

class LoadoutContainer extends React.Component {
  render(){
    return(
      <Container align='center'>
        <Weapon />
        <Armor />
        <Horse />
      </Container>
    )
  }
}

export default LoadoutContainer
