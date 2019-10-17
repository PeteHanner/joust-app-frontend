import React from 'react'
import { Grid, Segment, Divider, Button, Image, Card } from 'semantic-ui-react'

class IconContainer extends React.Component {
  render(){
    return(
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={6}>
            <Grid columns={3} celled>
              <Grid.Row>
                <Grid.Column>
                  <Image src='http://www.fillmurray.com/100/100' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='http://www.fillmurray.com/100/100' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='http://www.fillmurray.com/100/100' />
                </Grid.Column>
              </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Image src='http://www.fillmurray.com/100/100' />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='http://www.fillmurray.com/100/100' />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='http://www.fillmurray.com/100/100' />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Image src='http://www.fillmurray.com/100/100' />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='http://www.fillmurray.com/100/100' />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src='http://www.fillmurray.com/100/100' />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={2}>
              Detail View
            </Grid.Column>
          </Grid>
        </Segment>
      )
    }
  }

  export default IconContainer
