import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class SelectionContainer extends React.Component {
  render(){
    return(
      <div>
      <Link to='/equipment?type=weapon'>
      <Button size='huge' circular >weapon </Button>
      </Link>
      <Link to='/equipment?type=armor'>
      <Button size='huge' circular >armor </Button>
      </Link>
      <Link to='/equipment?type=horse'>
      <Button size='huge' circular icon='chess knight'></Button>
      </Link>
      </div>
    )
  }
}

export default SelectionContainer
