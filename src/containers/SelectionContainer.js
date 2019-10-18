import React from 'react'
import {Button, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class SelectionContainer extends React.Component {
  render(){
    return(
      <div>
        <Segment>
          <Link to='/equipment/weapons'>
            <Button size='huge' circular >weapon </Button>
          </Link>
        </Segment>
        <Segment>
          <Link to='/equipment/armors'>
            <Button size='huge' circular >armor </Button>
          </Link>
        </Segment>
        <Segment>
          <Link to='/equipment/horses'>
            <Button size='huge' circular icon='chess knight'></Button>
          </Link>
        </Segment>
        <Segment>
          <Link to='/about'>
            <Button size='huge' >How to Play</Button>
          </Link>
        </Segment>
      </div>
    )
  }
}

export default SelectionContainer
