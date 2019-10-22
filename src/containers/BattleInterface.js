import React, {Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import {Grid, Button} from 'semantic-ui-react'

class BattleInterface extends React.Component {

  render(){
    return(
      this.props.gameOver ?
      <Redirect to='/' />
      :
      <Fragment>
        <Grid.Column textAlign='center'>
          <h3>PLAYER</h3>
          <p>HP: {this.props.userHp.toFixed(2)}</p>
          <p>Attack: {this.props.userAtk}</p>
          <p>Defense: {this.props.userDef}</p>
          <p>Speed Modifier: {this.props.userSpd.toFixed(2)}</p>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <div className='data-div' align="center">
            <p>{this.props.userAtkMsg}</p>
            <p>{this.props.oppAtkMsg}</p>
          </div>
          <Button color='red' disabled={this.props.charging} onClick={this.props.joust}>JOUST!</Button>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <h3>OPPONENT</h3>
          <p>HP: {this.props.opponentHp.toFixed(2)}</p>
          <p>Attack: {this.props.opponentAtk}</p>
          <p>Defense: {this.props.opponentDef}</p>
          <p>Speed Modifier: {this.props.opponentSpd.toFixed(2)}</p>
        </Grid.Column>
      </Fragment>
    )
  }
}

export default BattleInterface
