import React from 'react'
import {Card, Image} from 'semantic-ui-react'

class Weapon extends React.Component {
  render(){
    return(
      <Card>
        {
          this.props.userWeapon  ?
          <Image src={this.props.userWeapon.img} wrapped/>
        :
        <Image src='http://www.fillmurray.com/285/220' wrapped/>
        }
        <Card.Content>
          <Card.Header>{this.props.userWeapon.name}</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default Weapon
