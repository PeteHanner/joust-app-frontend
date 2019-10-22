import React from 'react'
import {Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const About = () => {
  return(
    <React.Fragment>
      <h1 class='welcome'>Welcome to Joust!</h1>
      <h3 class='how'>How to Play</h3>
      <h5 class='pre'>Prerequisite's:</h5>
      <p class='about-info'>A player must select their equipment before being allowed to Joust</p>
      <p class='about-info'><img alt='sword icon' src={require('../assets/images/icons/sword.png')} className='about-page-icon' />This button will lead you to a selection of WEAPONS to choose from for your battle</p>
      <p class='about-info'><img alt='shield icon'src={require('../assets/images/icons/shield.png')} className='about-page-icon'/> This button will lead you to a selection of ARMOR to choose from for your battle</p>
      <p class='about-info'><img alt='horse icon'src={require('../assets/images/icons/horse.png')} className='about-page-icon'/>This button will lead you to a selection of HORSES to choose from for your battle</p>
      <h5 class='battle'>Battle Logic:</h5>
      <p class='about-info'>* This game is based on a random number generator between 1 - 100</p>
      <br></br>
      <p class='about-info'>- If the User attack is successful and the Opponent's defense fails</p>
      <p class='about-info'>+ Then the User deals a flat damage multiplied by a speed modifier</p>
      <br></br>
      <p class='about-info'>- If the User attack is  NOT successful and the Opponent's defense is successful</p>
      <p class='about-info'>+ Then the User deals 10% of their flat damage to themselves</p>
      <br></br>
      <p class='about-info'>- If the User attack is NOT successful and the Opponent's defense is NOT successful</p>
      <p class='about-info'>+ then nothing happens to anyone's HP</p>

      <br></br>
      <Button color='yellow'>
        <NavLink to='/' style={{color: 'white', textDecoration: 'none'}} >
          Back to the Game
        </NavLink>
      </Button>
      <br />
      <div id='attribution'>
      <p>Jousting Knight icon by Estherhase</p>
      <p>Sword, shield, and horse icons from the Noun Project</p>
      <p>Flail image by Tim Bartel</p>
      <p>Chain mail image by Roy Luck</p>
      <p>Leather armor image by Ed's Toy Box</p>
      <p>Hoplite armor image by Max Pixel</p>
      <p>Loincloth image by Jacob Ring</p>
      </div>
    </React.Fragment>
  )
}

export default About
