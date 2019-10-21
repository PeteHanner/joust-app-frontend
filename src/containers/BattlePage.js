import React from 'react'
import AnimationContainer from './AnimationContainer'
import BattleInterface from './BattleInterface'
import {Grid} from 'semantic-ui-react'

class BattlePage extends React.Component {


  render(){
    return(
      <Grid centered>
        <Grid.Row columns={1}>
          <AnimationContainer />
        </Grid.Row>
        <Grid.Row columns={3}>
          <BattleInterface
            userHorse={this.props.userHorse}
            userWeapon={this.props.userWeapon}
            userArmor={this.props.userArmor}
            opponent={this.props.opponent}
          />
        </Grid.Row>
      </Grid>
    )
  }
}

export default BattlePage
