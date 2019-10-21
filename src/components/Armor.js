import React from 'react'
import {Card, Image} from 'semantic-ui-react'


class Armor extends React.Component {
  render(){
    return(
      <Card>
        {
          this.props.userArmor  ?
          <Image src={this.props.userArmor.img} wrapped/>
        :
        <Image src='http://www.fillmurray.com/285/220' wrapped/>
        }
        <Card.Content>
          <Card.Header>{this.props.userArmor.name}</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default Armor
