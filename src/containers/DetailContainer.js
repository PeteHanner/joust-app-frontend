import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

class DetailContainer extends React.Component {

  listStats = () => {
    let stats = []
    if(this.props.selectedEqt.base_dmg || this.props.selectedEqt.base_dmg === 0 ){
      stats.push(`Base Damage: ${this.props.selectedEqt.base_dmg}`)
    }
    if(this.props.selectedEqt.base_def || this.props.selectedEqt.base_def === 0){
      stats.push(`Base Defense: ${this.props.selectedEqt.base_def}`)
    }
    if(this.props.selectedEqt.atk_mod || this.props.selectedEqt.atk_mod === 0){
      stats.push(`Attack Modifier: ${this.props.selectedEqt.atk_mod}`)
    }
    if(this.props.selectedEqt.def_mod || this.props.selectedEqt.def_mod === 0){
      stats.push(`Defense Modifier: ${this.props.selectedEqt.def_mod}`)
    }
    if(this.props.selectedEqt.spd_mod || this.props.selectedEqt.spd_mod === 0){
      stats.push(`Speed Modifier: ${this.props.selectedEqt.spd_mod}`)
    }
    return stats.map((stat) => <p>{stat}</p>)
  }

  render(){
    return(
      <Card >
        <Image src={this.props.selectedEqt.img} wrapped/>
        <Card.Content>
          <Card.Header>{this.props.selectedEqt.name}</Card.Header>
          <Card.Description>{this.listStats()}</Card.Description>
          <br></br>
          <Button><NavLink  to='/' onClick={() => this.props.equipEqt(this.props.selectedEqt, this.props.type)} >Equip</NavLink></Button>
        </Card.Content>
      </Card>
    )
  }
}

export default DetailContainer
