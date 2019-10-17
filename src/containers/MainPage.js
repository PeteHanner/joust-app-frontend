import React from 'react'
import LoadoutContainer from './LoadoutContainer'
import SelectionContainer from './SelectionContainer'
import {Grid, Divider, Segment, Button} from 'semantic-ui-react'


class MainPage extends React.Component {
  render(){
    return(
      <Segment placeholder>
        <Grid container columns={2} relaxed stackable>
          <Grid.Column stretched floated='left' width={6} color='blue'>
            <SelectionContainer />
          </Grid.Column>
          <Grid.Column floated='right' width={6} color='grey'>
            <LoadoutContainer />
          </Grid.Column>
        </Grid>
        <Divider vertical><Button circular size='huge'>JOUST!</Button></Divider>
      </Segment>
    )
  }
}

export default MainPage