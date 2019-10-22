import React, {Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import {Grid, Button, Progress, Image} from 'semantic-ui-react'

class BattleInterface extends React.Component {

  render(){
    debugger
    return(
      this.props.gameOver ?
      <Redirect to='/' />
      :
      <Fragment>
      <Grid.Column textAlign='center'>
        <h4>Equipment</h4>
        <p>Weapon: {this.props.userWeapon.name}</p>
        <p>Armor: {this.props.userArmor.name}</p>
        <p>Horse: {this.props.userHorse.name}</p>
      </Grid.Column>
        <Grid.Column textAlign='center'>
          <h3>PLAYER</h3>
          <Progress progress='value' value={this.props.userHp.toFixed(2)} total={100}  indicating>
          HP
          </Progress>
          <p>Attack: {this.props.userAtk}</p>
          <p>Defense: {this.props.userDef}</p>
          <p>Speed Modifier: {this.props.userSpd.toFixed(2)}</p>
        </Grid.Column>
        <Grid.Column textAlign='center' width={3.75}>
          <div className='data-div' align="center">
            <p>{this.props.userAtkMsg}</p>
            <p>{this.props.oppAtkMsg}</p>
          </div>
          <Image id='joust-logo' alt='JOUST!' src='https://i.imgur.com/gYyasxF.png' onClick={this.props.charging ? null : this.props.joust} />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <h3>OPPONENT</h3>
          <Progress progress='value' value={this.props.opponentHp.toFixed(2)} total={100}  indicating>
          HP
          </Progress>
          <p>Attack: {this.props.opponentAtk}</p>
          <p>Defense: {this.props.opponentDef}</p>
          <p>Speed Modifier: {this.props.opponentSpd.toFixed(2)}</p>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <h4>Equipment</h4>
          <p>Weapon: {this.props.opponentWeapon.name}</p>
          <p>Armor: {this.props.opponentArmor.name}</p>
          <p>Horse: {this.props.opponentHorse.name}</p>
        </Grid.Column>
      </Fragment>
    )
  }
}

export default BattleInterface
