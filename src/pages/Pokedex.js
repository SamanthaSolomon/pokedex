import React from "react"
import OnePokemon from "../components/OnePokemon"

const Pokedex = (props) => {
    
    const apiURL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=150'

    //hold pokes
    const [poke, setPoke] = React.useState(null)


    //fetch
    const getPokes = async () => {
        const response = await fetch (apiURL)
        const data = await response.json()
        setPoke(data)
    }


    //run getPokes once on component load
    React.useEffect(() => {
        getPokes()
    }, [])

    //map pokes when loaded
    const loaded = () => {
        return (
        <div>
        {poke.results.map((pokemon, i) => {
            const {name, url} = pokemon
            return (
                <p onClick={()=>{props.iChooseYou(pokemon)
                props.history.push("/onepokemon")
                }} key={i}> {name} </p>
            )
        })}
       </div>
        )  
    } 
    
    const loading = () => {
        return (
            <h3>Getting Pokemon</h3>
        )
    }
    
    return(
        <div>
            <h1>Here is the Pokedex</h1>
            {poke ? loaded(): loading}
        </div>

    )
}

export default Pokedex