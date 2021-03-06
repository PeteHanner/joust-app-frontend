import React, {Fragment} from 'react'
import {Card, Image} from 'semantic-ui-react'


class Horse extends React.Component {
  render() {
    return(
      <Fragment>
        {this.props.userHorse ?
          <Card raised color='green'>
            <Image src={this.props.userHorse.img} className='loadout-icon' wrapped/>
            <Card.Content>
              <Card.Header>{this.props.userHorse.name}</Card.Header>
            </Card.Content>
          </Card>
          :
          <Image
            wrapped
            src={require('../assets/images/icons/horse.png')}
            className='loadout-placeholder'
            />
        }
      </Fragment>
    )
  }
}

export default Horse
