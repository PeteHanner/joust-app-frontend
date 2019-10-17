import React from 'react'
import {Card, Image} from 'semantic-ui-react'

class DetailContainer extends React.Component {
  render(){
    return(
      <Card >
        <Image src='http://www.fillmurray.com/100/100' wrapped/>
        <Card.Content>
        <Card.Header>Weapon Name</Card.Header>
        <Card.Description>Stats</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default DetailContainer
