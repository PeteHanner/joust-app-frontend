import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

class IconContainer extends React.Component {
  render(){
    return(

      <Grid columns={3} celled>
        <Grid.Row>
          <Grid.Column>
            <Image src='http://www.fillmurray.com/100/100' wrapped/>
          </Grid.Column>
          <Grid.Column>
            <Image src='http://www.fillmurray.com/100/100' wrapped/>
          </Grid.Column>
          <Grid.Column>
            <Image src='http://www.fillmurray.com/100/100' wrapped/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src='http://www.fillmurray.com/100/100' wrapped/>
          </Grid.Column>
          <Grid.Column>
            <Image src='http://www.fillmurray.com/100/100' wrapped/>
          </Grid.Column>
          <Grid.Column>
            <Image src='http://www.fillmurray.com/100/100' wrapped/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src='http://www.fillmurray.com/100/100' wrapped/>
          </Grid.Column>
          <Grid.Column>
            <Image src='http://www.fillmurray.com/100/100' wrapped/>
          </Grid.Column>
          <Grid.Column>
            <Image src='http://www.fillmurray.com/100/100' wrapped/>
          </Grid.Column>
        </Grid.Row>
      </Grid>


  )
}
}

export default IconContainer
