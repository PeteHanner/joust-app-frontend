import React, {Fragment} from 'react'
import {Grid, Button} from 'semantic-ui-react'

class BattleInterface extends React.Component {
  constructor(){
    super()

    this.state = {
      userHp: 100,
      userAtk: 0,
      userDef: 0,
      userSpd: 0,
      opponentHp: 100,
      opponentAtk: 0,
      opponentDef: 0,
      opponentSpd: 0
    }
  }

  componentDidMount(){
    this.setState({userAtk:(this.props.userWeapon.atk_mod + this.props.userHorse.atk_mod), userDef:(this.props.userArmor.base_def + this.props.userWeapon.def_mod + this.props.userHorse.def_mod), userSpd:(this.props.userWeapon.spd_mod + this.props.userHorse.spd_mod + this.props.userArmor.spd_mod)/3})
  }


  render(){
    return(
      <Fragment>
      <Grid.Column>
      <p>player stats</p>
      <p>Attack:{this.state.userAtk}</p>
      <p>Defense:{this.state.userDef}</p>
      <p>Speed:{this.state.userSpd}</p>
      </Grid.Column>
      <Grid.Column>
      <div class='data-div' align="center">
      <p></p>
      <Button>Joust</Button>
      </div>
      </Grid.Column>
      <Grid.Column>
      <p>opponent stats</p>
      <p>Attack:{this.state.opponentAtk}</p>
      <p>Defense:{this.state.opponentDef}</p>
      <p>Speed:{this.state.opponentSpd}</p>
      </Grid.Column>
      </Fragment>
    )
  }
}

export default BattleInterface
