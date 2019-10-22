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
        <h4 className='midevil-font'>Equipment</h4>
        <p className='midevil-font'>Weapon: {this.props.userWeapon.name}</p>
        <p className='midevil-font'>Armor: {this.props.userArmor.name}</p>
        <p className='midevil-font'>Horse: {this.props.userHorse.name}</p>
      </Grid.Column>
        <Grid.Column textAlign='center'>
          <h3 className='midevil-font' >PLAYER</h3>
          <Progress progress='value' value={this.props.userHp.toFixed(2)} total={100}  indicating>
          HP
          </Progress>
          <p className='midevil-font'>Attack: {this.props.userAtk}</p>
          <p className='midevil-font'>Defense: {this.props.userDef}</p>
          <p className='midevil-font'>Speed Modifier: {this.props.userSpd.toFixed(2)}</p>
        </Grid.Column>
        <Grid.Column textAlign='center' width={3.75}>
          <div className='data-div' align="center" >
            <p className='midevil-font'>{this.props.userAtkMsg}</p>
            <p className='midevil-font'>{this.props.oppAtkMsg}</p>
          </div>
          <Image id='joust-logo' alt='JOUST!' src='https://i.imgur.com/gYyasxF.png' onClick={this.props.charging ? null : this.props.joust} />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <h3 className='midevil-font'>OPPONENT</h3>
          <Progress progress='value' value={this.props.opponentHp.toFixed(2)} total={100}  indicating>
          HP
          </Progress>
          <p className='midevil-font'>Attack: {this.props.opponentAtk}</p>
          <p className='midevil-font'>Defense: {this.props.opponentDef}</p>
          <p className='midevil-font'>Speed Modifier: {this.props.opponentSpd.toFixed(2)}</p>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <h4 className='midevil-font'>Equipment</h4>
          <p className='midevil-font'>Weapon: {this.props.opponentWeapon.name}</p>
          <p className='midevil-font'>Armor: {this.props.opponentArmor.name}</p>
          <p className='midevil-font'>Horse: {this.props.opponentHorse.name}</p>
        </Grid.Column>
      </Fragment>
    )
  }
}

export default BattleInterface
