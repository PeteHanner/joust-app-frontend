import React from 'react'
import Weapon from '../components/Weapon'
import Armor from '../components/Armor'
import Horse from '../components/Horse'
import {Container} from 'semantic-ui-react'

class LoadoutContainer extends React.Component {
  render(){
    return(
      <Container align='center'>
        <Weapon userWeapon={this.props.userWeapon}/>
        <Armor userArmor={this.props.userArmor}/>
        <Horse userHorse={this.props.userHorse}/>
      </Container>
    )
  }
}

export default LoadoutContainer
