import React, { Suspense, useState } from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import fetchPokemon from './fetch-pokemon'

const myPokemon = createResource(fetchPokemon)

function PokemonInfo({ pokemonName }) {
  const pokemon = myPokemon.read(pokemonName)
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
        {pokemonName ? (
          <Suspense fallback={<div>loading...</div>}>
            <PokemonInfo pokemonName={pokemonName} />
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default Pokemon
