import React from 'react'
import LoadoutContainer from './LoadoutContainer'
import SelectionContainer from './SelectionContainer'
import {Grid, Divider, Segment, Button, Image} from 'semantic-ui-react'



class MainPage extends React.Component {
  render(){
    return(
      <Segment placeholder>
        <Grid container columns={2} relaxed stackable>
          <Grid.Column stretched floated='left' width={6} color='yellow'>
            <SelectionContainer />
          </Grid.Column>
          <Grid.Column floated='right' width={6} color='grey'>
            <LoadoutContainer userHorse={this.props.userHorse} userWeapon={this.props.userWeapon} userArmor={this.props.userArmor}/>
          </Grid.Column>
        </Grid>

        <Divider hidden vertical>
          <Image id='start-logo' alt='JOUST!' src='https://i.imgur.com/gYyasxF.png' onClick={this.props.verifyJoust} />
        </Divider>
      </Segment>
    )
  }
}

export default MainPage






// <Button circular color='red' size='massive' onClick={this.props.verifyJoust}>JOUST!</Button>
