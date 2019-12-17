import React from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <React.Fragment>
      <h1 class='welcome'>Welcome to Joust!</h1>
      <h3 class='how'>How to Play</h3>
      <h5 class='pre'>Prerequisites:</h5>
      <p class='about-info'>A player must select ALL their equipment before being allowed to Joust</p>
      <p class='about-info'><img alt='sword icon' src={require('../assets/images/icons/sword.png')} className='about-page-icon' /><strong>This button will lead you to a selection of WEAPONS to choose from for your battle</strong></p>
      <p class='about-info'>- Base Damage: How much damage this weapon deals on a hit</p>
      <p class='about-info'>- Attack Modifier: The chance this weapon will hit, as a % out of 100</p>
      <p class='about-info'>- Defense Modifier: How much this weapon helps or hurts your defense, as a % out of 100</p>
      <p class='about-info'>- Speed Modifier: How much this weapon affects your speed. The faster you are, the more damage you deal.</p>
      <p class='about-info'><img alt='shield icon' src={require('../assets/images/icons/shield.png')} className='about-page-icon' /> <strong>This button will lead you to a selection of ARMOR to choose from for your battle</strong></p>
      <p class='about-info'>- Base Defense: The likelihood this armor will protext you from an attack, as a % out of 100</p>
      <p class='about-info'>- Speed Modifier: How much this armor affects your speed. The faster you are, the more damage you deal.</p>
      <p class='about-info'><img alt='horse icon' src={require('../assets/images/icons/horse.png')} className='about-page-icon' /><strong>This button will lead you to a selection of HORSES to choose from for your battle</strong></p>
      <p class='about-info'>- Attack Modifier: The amount this horse boosts or hinders your % chance of attack success</p>
      <p class='about-info'>- Defense Modifier: The amount this horse boosts or hinders your % chance of defense success</p>
      <p class='about-info'>- Speed Modifier: How fast this horse can move compared to average. The faster you are, the more damage you deal.</p>
      <h5 class='battle'>Battle Logic:</h5>
      <br></br>
      <p class='about-info'>For each round of jousting, the User and Opponent each make an attempt at attacking and defending.</p>
      <br />
      <p class='about-info'>- If the User attack is successful and Opponent defense fails:</p>
      <p class='about-info'>+ The User deals their weapon's base damage, multiplied by their speed modifier</p>
      <br></br>
      <p class='about-info'>- If the User attack and Opponent defense are both successful:</p>
      <p class='about-info'>+ The User deals only one quarter of their speed-modified damage</p>
      <br></br>
      <p class='about-info'>- If the User attack is NOT successful and Opponent defense is successful:</p>
      <p class='about-info'>+ The Opponent parries 10% of the User's attempted damage back at them</p>
      <br></br>
      <p class='about-info'>- If the User attack and Opponent defense both fail:</p>
      <p class='about-info'>+ No one takes any damage and you both swallow your pride before trying to do better next round</p>
      <br />
      <p class='about-info'>- The same rules apply in reverse for your Opponent</p>

      <br></br>
      <Button color='yellow'>
        <NavLink to='/' style={{ color: 'white', textDecoration: 'none' }} >
          Back to the Game
        </NavLink>
      </Button>
      <br />
      <div id='attribution'>
        <strong><p>Created by <a href='https://github.com/ggarciag24' target="_blank" rel="noopener noreferrer">German Garcia Gonzalez</a> and <a href='https://github.com/PeteHanner' target="_blank" rel="noopener noreferrer">Pete Hanner</a></p></strong>
        <br></br>
        <p> Created my free logo at <a href='https://my.logomakr.com'>LogoMakr.com</a></p>
        <p>Jousting Knight icon by Estherhase</p>
        <p>Sword, shield, and horse icons from the Noun Project</p>
        <p>Flail image by Tim Bartel</p>
        <p>Chain mail image by Roy Luck</p>
        <p>Leather armor image by Ed's Toy Box</p>
        <p>Hoplite armor image by Max Pixel</p>
        <p>Loincloth image by Jacob Ring</p>
        <p>These and all other images used under public domain/CC license</p>
      </div>
    </React.Fragment>
  )
}

export default About
