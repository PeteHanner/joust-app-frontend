import React from 'react'
import {Card, Image} from 'semantic-ui-react'


class Horse extends React.Component {
  render(){
    return(
      <Card>
      {
        this.props.userHorse  ?
        <Image src={this.props.userHorse.img} wrapped/>
      :
      <Image src='http://www.fillmurray.com/285/220' wrapped/>
      }
        <Card.Content>
          <Card.Header>{this.props.userHorse.name}</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default Horse
