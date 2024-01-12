import {useEffect, useState} from "react";
import axios from "axios";


function PokemonCard({endpoint}) {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff')
                setPokemon(result.data)
                console.log(result.data)
            } catch (e) {
                setError(e)
                console.log(error)
            }
        }

        fetchPokemon()
    }, [endpoint, error]);

    useEffect( () => {
        console.log( 'pokemon single: ', pokemon.abilities);
    }, [ pokemon ] );



    return (

        <>
            {Object.keys(pokemon).length > 0 && (
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <p>Moves: {pokemon.moves.length}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Abilities:</p>
                    {pokemon.abilities.map((ability) => {
                        return(
                            <li key={ability.name}>{ability.name}</li>
                        )
                    })}

                </>

            )}
        </>

    )
}

export default PokemonCard