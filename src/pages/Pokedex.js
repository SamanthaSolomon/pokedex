import React from "react"

const Pokedex = () => {
    
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
  
    
    return(
        <h1>Here is the Pokedex</h1>
    )
}

export default Pokedex