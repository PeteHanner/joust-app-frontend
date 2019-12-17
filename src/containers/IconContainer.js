import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

class IconContainer extends React.Component {

  buildGrid = () => {
    if (this.props.type) {
      // make a copy of the eqt props array
      let typeCopy = [...this.props.type]
      // set up blank arrays to store objects for grid building
      let gridArray = []
      let gridRow = []

      // loop over all the eqt items in props
      while (typeCopy[0]) {
        for (let i = 0; i < 3; i++) {
          // add 3 items to the row (or however many remain)
          if (typeCopy[0]) {
            gridRow.push(typeCopy.shift())
          }
        }
        // add row to multidimensional array
        gridArray.push(gridRow)
        // reset the row array for the next loop
        gridRow = []
      }

      // make a JSX Row from each sub-array of the multidimensional array
      return gridArray.map((row, idx) => {
        return(
          <Grid.Row key={idx}>
            {row.map(eqt => <Grid.Column key={eqt.id}><Image className={'eqt-selection-icon'} src={eqt.img} onClick={() => this.props.equipClick(eqt)} wrapped/></Grid.Column>)}
          </Grid.Row>
        )
      })
    }
  }


  render() {
    return(
      <Grid columns={3} celled>
        {this.buildGrid()}
      </Grid>
    )
  }
}

export default IconContainer
