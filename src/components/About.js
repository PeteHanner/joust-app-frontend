import React from 'react'
import {Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const About = () => {
  return(
    <React.Fragment>
      <h1>Welcome to Joust!</h1>

      <Button color='blue'>
        <NavLink to='/' style={{color: 'white', textDecoration: 'none'}} >
          Back to the Game
        </NavLink>
      </Button>

      <p>Jousting Knight icon by Estherhase</p>
      <p>Sword, shield, and horse icons from the Noun Project</p>
    </React.Fragment>
  )
}

export default About