const queryParams = new URLSearchParams(window.location.search)
const pokemonId = queryParams.get('id')

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then( response => response.json() )
    .then( pokemon => {
        const pokeTitle = document.createElement('title')
        const spriteImage = document.createElement('img')
        const pokeName = document.createElement('h1')
        const pokeType = document.createElement('h2')

        spriteImage.src = pokemon.sprites.front_default
        pokeTitle.textContent = pokemon.forms[0].name.toUpperCase()
        pokeName.textContent = pokemon.forms[0].name.toUpperCase()
        pokeType.textContent = pokemon.types[0].type.name.toUpperCase()

        document.head.append(pokeTitle)
        document.body.append(pokeName, spriteImage, pokeType)
    })