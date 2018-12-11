import React, { useState } from 'react'
import fetchPokemon from './fetch-pokemon'

function PokemonInfo({ pokemonName }) {
  const pokemon = { pokemonName }
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}

function Pokemon() {
  const [pokemonName, setPokemonName] = useState(null)
  function handleSubmit(e) {
    e.preventDefault()
    setPokemonName(e.target.elements.pokemonName.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pokemonName-input">PokemonName (i.e. Pickachu)</label>
        </div>
        <div>
          <input id="pokemonName-input" name="pokemonName" type="text" />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        {pokemonName ? <PokemonInfo pokemonName={pokemonName} /> : null}
      </div>
    </div>
  )
}

export default Pokemon
