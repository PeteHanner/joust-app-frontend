import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import IconContainer from './IconContainer'
import DetailContainer from './DetailContainer'

class EquipmentPage extends React.Component {

  constructor() {
    super()
    this.state = {
      equipment: []
    }
  }

  componentDidMount() {
    const eqtType = this.props.match.params.type
    const eqtArray = this.props[`${eqtType}`]
    this.setState({equipment: eqtArray})
  }

  render() {
    return(
      <Segment placeholder>
        <p>{`This is the equipment page for`}</p>
        <Segment>
          <Grid columns={2} divided>
            <Grid.Column width={10}>
              <IconContainer />
            </Grid.Column>
            <Grid.Column width={6} align='center'>
              <DetailContainer />
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment>
    )
  }
}

export default EquipmentPage
