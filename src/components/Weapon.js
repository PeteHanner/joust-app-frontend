import React, {Fragment} from 'react'
import {Card, Image} from 'semantic-ui-react'

class Weapon extends React.Component {
  render() {
    return(
      <Fragment>
        {this.props.userWeapon ?
          <Card>
            <Image src={this.props.userWeapon.img} wrapped/>
            <Card.Content>
              <Card.Header>{this.props.userWeapon.name}</Card.Header>
            </Card.Content>
          </Card>
          :
          <Image
            wrapped
            src={require('../assets/images/icons/sword.png')}
            className='loadout-placeholder'
            />
        }
      </Fragment>
    )
  }
}

export default Weapon
