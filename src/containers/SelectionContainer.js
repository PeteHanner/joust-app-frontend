import React from 'react'
import {Button, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class SelectionContainer extends React.Component {
  render(){
    return(
      <div>
        <Segment inverted color='red' padded>
          <Link to='/equipment/weapons'>
            <img
              alt='sword icon'
              src={require('../assets/images/icons/sword.png')}
              className='main-page-icon'
            />
          </Link>
        </Segment>
        <Segment inverted color='red' padded>
          <Link to='/equipment/armors'>
            <img
              alt='shield icon'
              src={require('../assets/images/icons/shield.png')}
              className='main-page-icon'
            />
          </Link>
        </Segment>
        <Segment inverted color='red' padded>
          <Link to='/equipment/horses'>
            <img
              alt='horse icon'
              src={require('../assets/images/icons/horse.png')}
              className='main-page-icon'
            />
          </Link>
        </Segment>
        <Segment inverted color='red' padded>
          <Link to='/about'>
            <Button size='large' >How to Play</Button>
          </Link>
        </Segment>
      </div>
    )
  }
}

export default SelectionContainer
