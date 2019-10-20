import React from 'react'
import {Button, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class SelectionContainer extends React.Component {
  render(){
    return(
      <div>
        <Segment inverted color='blue' padded='very'>
          <Link to='/equipment/weapons'>
            <Button size='massive' circular icon='bomb'></Button>
          </Link>
        </Segment>
        <Segment inverted color='blue' padded='very'>
          <Link to='/equipment/armors'>
            <Button size='massive' circular icon='shield alternate'></Button>
          </Link>
        </Segment>
        <Segment inverted color='blue' padded='very'>
          <Link to='/equipment/horses'>
            <Button size='massive' circular icon='chess knight'></Button>
          </Link>
        </Segment>
        <Segment inverted color='blue' padded='very'>
        </Segment>
        <Segment inverted color='blue' padded='very'>
          <Link to='/about'>
            <Button size='large' >How to Play</Button>
          </Link>
        </Segment>
      </div>
    )
  }
}

export default SelectionContainer
