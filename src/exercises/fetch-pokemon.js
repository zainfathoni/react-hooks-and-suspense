function fetchPokemon(name) {
  const pokemonQuery = `
    query($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `
  return window
    .fetch('https://graphql-pokemon.now.sh', {
      // Learn more about this API here: https://github.com/lucasbento/graphql-pokemon
      body: JSON.stringify({
        query: pokemonQuery,
        variables: { name }
      }),
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      },
      method: 'POST'
    })
    .then(r => r.json())
    .ten(response => response.data.pokemon)
}

export default fetchPokemon
