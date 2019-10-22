import React, {Fragment} from 'react'
import {Image} from 'semantic-ui-react'

class AnimationContainer extends React.Component {
  render(){
    return(
      <Fragment>
        <Image
          src={require('../assets/images/icons/left-side-knight.png')}
          floated='left'
          className='animated-knight'
          id='left-knight'
        />
        <Image
          src={require('../assets/images/icons/right-side-knight.png')}
          floated='right'
          className='animated-knight'
          id='right-knight'
        />
      </Fragment>
    )
  }
}

export default AnimationContainer
