import React from "react"
import './App.css';
import Nav from "./components/Nav"
import OnePokemon from "./components/OnePokemon"
import MyTeam from "./pages/MyTeam"
import Pokedex from "./pages/Pokedex"
import { Route, Switch } from "react-router-dom"

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/myteam"> 
          <MyTeam />
        </Route>  
        <Route path="/">
          <Pokedex />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
