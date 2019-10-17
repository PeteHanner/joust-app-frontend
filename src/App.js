import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './containers/MainPage'
import EquipmentPage from './containers/EquipmentPage'
import BattlePage from './containers/BattlePage'
import About from './components/About'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render(){
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
            <Route path="/equipment/:type" render={routerProps => <EquipmentPage {...routerProps}/>} />
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
