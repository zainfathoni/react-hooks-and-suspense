import React, { Suspense, useState } from 'react'
import fetchPokemon from './fetch-pokemon'

const cache = {}

function createResource(fn) {
  return {
    read(id) {
      const data = cache[id]
      if (!data) {
        const promise = fn(id).then(p => (cache[id] = p))
        throw promise
      }
      return data
    }
  }
}
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
