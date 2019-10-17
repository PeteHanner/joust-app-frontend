import React from 'react'
import {Card, Image} from 'semantic-ui-react'


class Horse extends React.Component {
  render(){
    return(
      <Card>
        <Image src='http://www.fillmurray.com/285/220' wrapped/>
        <Card.Content>
          <Card.Header>Horse Name</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default Horse
