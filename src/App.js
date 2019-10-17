import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './containers/MainPage'
import EquipmentPage from './containers/EquipmentPage'
import BattlePage from './containers/BattlePage'
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
         <Route path="/battle">
           <BattlePage />
         </Route>
         <Route path="/equipment">
           <EquipmentPage />
         </Route>
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
