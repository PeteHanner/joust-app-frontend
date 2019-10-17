import React from 'react'
import { Grid, Segment, Divider, Button, Image } from 'semantic-ui-react'
import IconContainer from './IconContainer'

const EquipmentPage = (props) => {
  const eqtType = props.match.params.type

  return(
    <Segment placeholder>
      <p>{`This is the equipment page for ${eqtType}`}</p>
      <IconContainer type={eqtType} />
    </Segment>
  )
}

export default EquipmentPage
