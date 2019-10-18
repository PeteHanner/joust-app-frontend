import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import IconContainer from './IconContainer'
import DetailContainer from './DetailContainer'

class EquipmentPage extends React.Component {

  constructor(){
    super()

    this.state = {
      selectedEqt: {}
    }
  }

  componentDidMount() {
    const eqtType = this.props.match.params.type
    this.props.filterEqt(eqtType)
  }

  equipClick = (eqt) => {
    this.setState({selectedEqt: eqt})
  }

  render() {
    return(
      <Segment placeholder>
        <Segment>
          <Grid columns={2} divided>
            <Grid.Column width={10}>
              <IconContainer type={this.props.type} equipClick={this.equipClick} />
            </Grid.Column>
            <Grid.Column width={6} align='center'>
              <DetailContainer selectedEqt={this.state.selectedEqt} equipEqt={this.props.equipEqt} type={this.props.match.params.type}/>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment>
    )
  }
}

export default EquipmentPage
