import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './containers/MainPage'
import EquipmentPage from './containers/EquipmentPage'
import BattlePage from './containers/BattlePage'
import About from './components/About'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

const DBURL = 'http://localhost:3001'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      horses: [],
      armors: [],
      weapons: [],
      eqtFilter: '',
      userWeapon: '',
      userHorse: '',
      userArmor: ''
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

  equipEqt = (item, type) => {
    if(type === 'horses' ){
      this.setState({userHorse: item})
    }
    if(type === 'weapons' ){
      this.setState({userWeapon: item})
    }
    if(type === 'armors' ){
      this.setState({userArmor: item})
    }
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
                    equipEqt={this.equipEqt}
                    />
                ) }} />
              <Route exact path="/" render={() => <MainPage userHorse={this.state.userHorse} userWeapon={this.state.userWeapon} userArmor={this.state.userArmor}/>} />
                  </Switch>
                </div>
              </Router>
            )
          }
        }

        export default App;
