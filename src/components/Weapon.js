import React from 'react'
import {Card, Image} from 'semantic-ui-react'

class Weapon extends React.Component {
  render(){
    return(
      <Card>
        <Image src='http://www.fillmurray.com/285/220' />
        <Card.Content>
          <Card.Header>Weapon Name</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default Weapon
