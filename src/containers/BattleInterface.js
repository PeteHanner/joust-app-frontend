import React, {Fragment} from 'react'
import {Redirect} from 'react-router-dom'
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
      opponentSpd: 0,
      userAtkMsg: '',
      oppAtkMsg: ''
    }
  }

  // UNCOMMENT
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
      this.setState({
        userAtkMsg: `You landed a hit, but your opponent's defenses limited damage!`,
        opponentHp: ( 0.25 * ( this.state.opponentHp - (this.props.userWeapon.base_dmg * this.state.userSpd) ) )
      }, this.checkHp)
    } else if (userAtkSuccess && !oppDefSuccess) {
      this.setState({
        userAtkMsg: `You landed a hit past your opponent's defenses!`,
        opponentHp: ( this.state.opponentHp - ( this.props.userWeapon.base_dmg * this.state.userSpd ) )
      }, this.checkHp)
    } else if (!userAtkSuccess && oppDefSuccess) {
      this.setState({
        userAtkMsg: `Your opponent parried your attack back at you!`,
        userHp: (this.state.userHp - (0.1*(this.props.userWeapon.base_dmg)))
      }, this.checkHp)
    } else {
      this.setState({userAtkMsg: `Your attack and your opponent's defense missed each other entirely!`})
    }

    // opponent attack resolution
    if (oppAtkSuccess && userDefSuccess) {
      this.setState({
        userHp: this.state.userHp - ( 0.25 * (this.props.opponent[1].base_dmg * this.state.opponentSpd) ),
        oppAtkMsg: `Your opponent landed a hit, but your defenses limited damage!`
      }, this.checkHp)
    } else if (oppAtkSuccess && !userDefSuccess) {
      this.setState({
        userHp: (this.state.userHp - (this.props.opponent[1].base_dmg * this.state.opponentSpd) ),
        oppAtkMsg: `Your opponent landed a hit past your defenses!`
      }, this.checkHp)
    } else if (!oppAtkSuccess && userDefSuccess) {
      this.setState({
        opponentHp: (this.state.opponentHp - (0.1*(this.props.opponent[1].base_dmg))),
        oppAtkMsg: `You parried your opponent's attack back at them!`
      }, this.checkHp)
    } else {
      this.setState({
        oppAtkMsg: `Your opponent's attack and your defense missed each other entirely!`
      })
    }
  }

  checkHp = () => {
    if (this.state.userHp <= 0 && this.state.opponentHp <= 0) {
      alert('You both died you dum dums')
    } else
    if (this.state.userHp <= 0) {
      alert('You died! Why are you so bad at everything?')
    } else if (this.state.opponentHp <= 0) {
      alert('You won! Everyone gets lucky sometimes I guess')
    }
  }

  render(){
    return(
      // this.props.userWeapon && this.props.userArmor && this.props.userHorse ?
      <Fragment>
        <Grid.Column textAlign='center'>
          <h3>PLAYER</h3>
          <p>HP: {this.state.userHp.toFixed(2)}</p>
          <p>Attack: {this.state.userAtk}</p>
          <p>Defense: {this.state.userDef}</p>
          <p>Speed Modifier: {this.state.userSpd.toFixed(2)}</p>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <div className='data-div' align="center">
            <p>{this.state.userAtkMsg}</p>
            <p>{this.state.oppAtkMsg}</p>
          </div>
          <Button color='red' onClick={this.joust}>JOUST!</Button>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <h3>OPPONENT</h3>
          <p>HP: {this.state.opponentHp.toFixed(2)}</p>
          <p>Attack: {this.state.opponentAtk}</p>
          <p>Defense: {this.state.opponentDef}</p>
          <p>Speed Modifier: {this.state.opponentSpd.toFixed(2)}</p>
        </Grid.Column>
      </Fragment>
      // : UNCOMMENT
      // <Redirect to='/' />
    )
  }
}

export default BattleInterface
