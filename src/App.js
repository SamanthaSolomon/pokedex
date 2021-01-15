import React from "react"
import './App.css';
import Nav from "./components/Nav"
import OnePokemon from "./components/OnePokemon"
import MyTeam from "./pages/MyTeam"
import Pokedex from "./pages/Pokedex"
import { Route, Switch } from "react-router-dom"

function App(props) {
  
  const [selectedPoke, setSelectedPoke] = React.useState (null)

  const iChooseYou = (pokemon) => {setSelectedPoke(pokemon)}


  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/myteam"> 
          <MyTeam />
        </Route>  
        <Route path="/"render={(renderProps)=>{
          return(
            <Pokedex {...renderProps} iChooseYou={iChooseYou}/>
          )
        }}></Route>>
      </Switch>
      <div>
        <Route path="/onepokemon" render={(renderProps)=>{
          return(
            <OnePokemon {...renderProps} selectedPoke={selectedPoke}/>
          )
        }}></Route>
      </div>
    </div>

  );
}

export default App;
