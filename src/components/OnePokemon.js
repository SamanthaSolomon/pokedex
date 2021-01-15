import React from "react"

const OnePokemon = (props) => {

    const [chosen, setChosen] = React.useState(null)

    const chosenPoke = async () => {
        const response = await fetch (props.selectedPoke.url)
        const data = await response.json()
        setChosen(data)
        }
     

    return(
        <p>Here is one Pokemon</p>
    )
}

console.log("onePokemon", OnePokemon)

export default OnePokemon