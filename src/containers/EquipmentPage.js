import React from 'react'
import { Grid, Segment, Divider, Button, Image } from 'semantic-ui-react'
import IconContainer from './IconContainer'
import DetailContainer from './DetailContainer'

const EquipmentPage = (props) => {
  const eqtType = props.match.params.type

  return(
    <Segment placeholder>
      <p>{`This is the equipment page for ${eqtType}`}</p>
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={10}>
            <IconContainer type={eqtType} />
          </Grid.Column>
          <Grid.Column width={6} align='center'>
            <DetailContainer />
          </Grid.Column>
          </Grid>
        </Segment>
      </Segment>
    )
  }

  export default EquipmentPage
