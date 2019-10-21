import React, {Fragment} from 'react'
import {Card, Image} from 'semantic-ui-react'

class Armor extends React.Component {
  render() {
    return(
      <Fragment>
        {this.props.userArmor ?
          <Card>
            <Image src={this.props.userArmor.img} wrapped/>
            <Card.Content>
              <Card.Header>{this.props.userArmor.name}</Card.Header>
            </Card.Content>
          </Card>
          :
          <Image
            wrapped
            src={require('../assets/images/icons/shield.png')}
            className='loadout-placeholder'
          />
        }
      </Fragment>
    )
  }
}

export default Armor




