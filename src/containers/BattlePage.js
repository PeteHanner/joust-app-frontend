import React, {Fragment} from 'react'
import AnimationContainer from './AnimationContainer'
import BattleInterface from './BattleInterface'
import {Grid, Divider} from 'semantic-ui-react'

class BattlePage extends React.Component {


  render(){
    return(
      <Fragment>
        <Grid>
          <Grid.Row centered columns={1}>
        <AnimationContainer />
        </Grid.Row>
        <Divider hidden />
          <Grid.Row columns={3}>
            <BattleInterface
              userHorse={this.props.userHorse}
              userWeapon={this.props.userWeapon}
              userArmor={this.props.userArmor}
              opponent={this.props.opponent}
              />
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default BattlePage
