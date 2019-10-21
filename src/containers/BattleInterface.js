import React, {Fragment} from 'react'
import {Grid, Button} from 'semantic-ui-react'

class BattleInterface extends React.Component {
  constructor(){
    super()

    this.state = {
      userHp: 100,
      userAtk: 80,
      userDef: 70,
      userSpd: 1.2,
      opponentHp: 100,
      opponentAtk: 80,
      opponentDef: 70,
      opponentSpd: 1.2
    }
  }

  // componentDidMount(){
  //   this.setState({
  //     userAtk:(this.props.userWeapon.atk_mod + this.props.userHorse.atk_mod),
  //     userDef:(this.props.userArmor.base_def + this.props.userWeapon.def_mod + this.props.userHorse.def_mod),
  //     userSpd:((this.props.userWeapon.spd_mod + this.props.userHorse.spd_mod + this.props.userArmor.spd_mod)/3),
  //     opponentAtk:(this.props.opponent[1].atk_mod + this.props.opponent[0].atk_mod),
  //     opponentDef:(this.props.opponent[2].base_def + this.props.opponent[1].def_mod + this.props.opponent[0].def_mod),
  //     opponentSpd:((this.props.opponent[1].spd_mod + this.props.opponent[0].spd_mod + this.props.opponent[2].spd_mod)/3)
  //   })
  // }

  joust = () => {
    // "roll" user attack and defense
    // "roll" opp attack & defense
    let userAtkSuccess = !!( Math.ceil(Math.random() * 100) < this.state.userAtk)
    let userDefSuccess = !!( Math.ceil(Math.random() * 100) < this.state.userDef)
    let oppAtkSuccess = !!( Math.ceil(Math.random() * 100) < this.state.opponentAtk)
    let oppDefSuccess = !!( Math.ceil(Math.random() * 100) < this.state.opponentDef)
    // user attack resolution
    if (userAtkSuccess && oppDefSuccess) {
      console.log('user attack success, opponent damage success');
      console.log(this.state.opponentHp);
      console.log(this.props.userWeapon.base_dmg);
      console.log(this.state.userSpd);
      // debugger
      if (this.state.userSpd < 1) {
        this.setState({opponentHp: ( this.state.opponentHp - ( this.props.userWeapon.base_dmg * this.state.userSpd ) )  })
      } else {
        this.setState({opponentHp: ( this.state.opponentHp - ( this.props.userWeapon.base_dmg ) )  })
      }
    } else if (userAtkSuccess && !oppDefSuccess) {
      console.log('user success, opponent failure');
      this.setState({opponentHp: ( this.state.opponentHp - ( this.props.userWeapon.base_dmg * this.state.userSpd ) )  })
    } else if (!userAtkSuccess && oppDefSuccess) {
      console.log('user failure, opponent success');
      this.setState({userHp: (this.state.userHp - (0.1*(this.props.userWeapon.base_dmg))) })
    } else {
      console.log('u suk lol');
    }

    // opponent attack resolution
    if (oppAtkSuccess && userDefSuccess) {
      if (this.state.opponentSpd < 1) {
        this.setState({userHp: (this.state.userHp - (this.props.opponent[1].base_dmg * this.state.opponentSpd) )})
      } else {
        this.setState({userHp: (this.state.userHp - this.props.opponent[1].base_dmg)})
      }
    } else if (oppAtkSuccess && !userDefSuccess) {
      this.setState({userHp: (this.state.userHp - (this.props.opponent[1].base_dmg * this.state.opponentSpd) )})
    } else if (!oppAtkSuccess && userDefSuccess) {
      console.log('opponent attack backfired');
      this.setState({opponentHp: (this.state.opponentHp - (0.1*(this.props.opponent[1].base_dmg))) })
    } else {
      console.log('u suk lol');
    }
  }

  render(){
    return(
      <Fragment>
        <Grid.Column>
          <p>player stats</p>
          <p>HP:{this.state.userHp}</p>
          <p>Attack:{this.state.userAtk}</p>
          <p>Defense:{this.state.userDef}</p>
          <p>Speed:{this.state.userSpd}</p>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={this.joust}>JOUST!</Button>
        </Grid.Column>
        <Grid.Column>
          <p>opponent stats</p>
          <p>HP:{this.state.opponentHp}</p>
          <p>Attack:{this.state.opponentAtk}</p>
          <p>Defense:{this.state.opponentDef}</p>
          <p>Speed:{this.state.opponentSpd}</p>
        </Grid.Column>
      </Fragment>
    )
  }
}

export default BattleInterface
