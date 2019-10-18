import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './containers/MainPage'
import EquipmentPage from './containers/EquipmentPage'
import BattlePage from './containers/BattlePage'
import About from './components/About'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const DBURL = 'http://localhost:3001'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      horses: [],
      armors: [],
      weapons: [],
      eqtFilter: ''
    }
  }

  componentDidMount() {
    fetch(DBURL + '/horses')
    .then(res => res.json())
    .then(horses => this.setState({horses: horses}))

    fetch(DBURL + '/armors')
    .then(res => res.json())
    .then(armors => this.setState({armors: armors}))

    fetch(DBURL + '/weapons')
    .then(res => res.json())
    .then(weapons => this.setState({weapons: weapons}))
  }

  filterEqt = (type) => {
    this.setState({eqtFilter: type})
  }

  selectedEqt = () => {
    return this.state[`${this.state.eqtFilter}`]
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/battle">
              <BattlePage />
            </Route>
            <Route exact path="/equipment/:type" render={routerProps => {
                return(
                  <EquipmentPage
                    filterEqt={this.filterEqt}
                    type={this.selectedEqt() }
                    {...routerProps}
                    />
                ) }} />
                <Route exact path="/" render={routerProps => {
                    return(
                      <MainPage
                        horse={this.state.horses}
                        weapon={this.state.weapons}
                        armor={this.state.armors}
                        {...routerProps}
                        />
                    ) }} />
                  </Switch>
                </div>
              </Router>
            )
          }
        }

        export default App;