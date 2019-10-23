import React, {Fragment} from 'react'
import AnimationContainer from './AnimationContainer'
import BattleInterface from './BattleInterface'
import {Grid, Divider} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

class BattlePage extends React.Component {
  constructor(props){
    super(props)
    let loaded = !!(this.props.userWeapon && this.props.userArmor && this.props.userHorse)
    this.state = {
      userHp: 100,
      userAtk: 0,
      userDef: 0,
      userSpd: 0,
      opponentHp: 100,
      opponentAtk: 0 ,
      opponentDef: 0,
      opponentSpd: 0,
      opponentWeapon: '',
      opponentHorse: '',
      opponentArmor: '',
      userAtkMsg: '',
      oppAtkMsg: '',
      charging: false,
      gameOver: false
    }
  }

  componentDidMount() {
    let opponent = this.props.createOpponent()
    this.props.turnOffRedirect()
    if (this.props.userWeapon && this.props.userArmor && this.props.userHorse) {
      this.setState({
        userAtk:(this.props.userWeapon.atk_mod + this.props.userHorse.atk_mod),
        userDef:(this.props.userArmor.base_def + this.props.userWeapon.def_mod + this.props.userHorse.def_mod),
        userSpd:((this.props.userWeapon.spd_mod + this.props.userHorse.spd_mod + this.props.userArmor.spd_mod)/3),
        opponentAtk:(opponent[1].atk_mod + opponent[0].atk_mod),
        opponentDef:(opponent[2].base_def + opponent[1].def_mod + opponent[0].def_mod),
        opponentSpd:((opponent[1].spd_mod + opponent[0].spd_mod + opponent[2].spd_mod)/3),
        opponentWeapon: opponent[1],
        opponentArmor: opponent[2],
        opponentHorse: opponent[0]
      })
    }
  }

  componentWillUnmount() {
    this.setState({gameOver: false})
  }

  joust = () => {
    // "roll" user attack and defense
    // "roll" opp attack & defense
    this.setState({charging: true, userAtkMsg: '', oppAtkMsg: ''})
    let userAtkSuccess = !!( Math.ceil(Math.random() * 100) < this.state.userAtk)
    let userDefSuccess = !!( Math.ceil(Math.random() * 100) < this.state.userDef)
    let oppAtkSuccess = !!( Math.ceil(Math.random() * 100) < this.state.opponentAtk)
    let oppDefSuccess = !!( Math.ceil(Math.random() * 100) < this.state.opponentDef)
    // user attack resolution
    setTimeout(() => {
      if (userAtkSuccess && oppDefSuccess) {
        this.setState({
          userAtkMsg: `You landed a hit, but your opponent's defenses limited damage!`,
          opponentHp: this.state.opponentHp - (0.25 * (this.props.userWeapon.base_dmg * this.state.userSpd))
        }, this.checkHp)
      } else if (userAtkSuccess && !oppDefSuccess) {
        this.setState({
          userAtkMsg: `You landed a hit past your opponent's defenses!`,
          opponentHp: this.state.opponentHp - (this.props.userWeapon.base_dmg * this.state.userSpd)
        }, this.checkHp)
      } else if (!userAtkSuccess && oppDefSuccess) {
        this.setState({
          userAtkMsg: `Your opponent parried your attack back at you!`,
          userHp: this.state.userHp - (0.1*(this.props.userWeapon.base_dmg))
        }, this.checkHp)
      } else {
        this.setState({userAtkMsg: `Your attack and your opponent's defense missed each other entirely!`})
      }
    }, 250)

    // opponent attack resolution
    setTimeout( () => {
      if (oppAtkSuccess && userDefSuccess) {
      this.setState({
        userHp: this.state.userHp - ( 0.25 * (this.state.opponentWeapon.base_dmg * this.state.opponentSpd) ),
        oppAtkMsg: `Your opponent landed a hit, but your defenses limited damage!`
      }, this.checkHp)
    } else if (oppAtkSuccess && !userDefSuccess) {
      this.setState({
        userHp: (this.state.userHp - (this.state.opponentWeapon.base_dmg * this.state.opponentSpd) ),
        oppAtkMsg: `Your opponent landed a hit past your defenses!`
      }, this.checkHp)
    } else if (!oppAtkSuccess && userDefSuccess) {
      this.setState({
        opponentHp: (this.state.opponentHp - (0.1*(this.state.opponentWeapon.base_dmg))),
        oppAtkMsg: `You parried your opponent's attack back at them!`
      }, this.checkHp)
    } else {
      this.setState({
        oppAtkMsg: `Your opponent's attack and your defense missed each other entirely!`
      })
    }}, 700)

    setTimeout(()=> this.setState({charging: false}), 2100)
  }

  checkHp = () => {
    if (this.state.userHp <= 0 && this.state.opponentHp <= 0) {
      alert('You both died you dum dums')
      this.setState({gameOver: true})
      // setTimeout(()=> this.setState({gameOver: false}), 500)
    } else
    if (this.state.userHp <= 0) {
      alert('You died! Why are you so bad at everything?')
      this.setState({gameOver: true})
      // setTimeout(()=> this.setState({gameOver: false}), 500)
  } else if (this.state.opponentHp <= 0) {
      alert('You won! Everyone gets lucky sometimes I guess')
      this.setState({gameOver: true})
      // setTimeout(()=> this.setState({gameOver: false}), 500)
    }
  }

  render(){
    return(
      this.props.userWeapon && this.props.userArmor && this.props.userHorse ?
      <Fragment>
        <Grid>
          <Grid.Row centered columns={1}>
        <AnimationContainer
          charging={this.state.charging}
          onAnimationStart={this.onAnimationStart}
          onAnimationEnd={this.onAnimationEnd}
        />
        </Grid.Row>
        <Divider hidden />
          <Grid.Row columns={5}>
            <BattleInterface
              {...this.state}
              joust={this.joust}
              userWeapon={this.props.userWeapon}
              userArmor={this.props.userArmor}
              userHorse={this.props.userHorse}
              opponentWeapon={this.state.opponentWeapon}
              opponentArmor={this.state.opponentArmor}
              opponentHorse={this.state.opponentHorse}
            />
          </Grid.Row>
        </Grid>
      </Fragment>
      :
      <Redirect to='/' />
    )
  }
}

export default BattlePage
