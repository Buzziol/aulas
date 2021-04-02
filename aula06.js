const list = document.querySelector('#list')
const baseUrl = 'https://pokeapi.co/api/v2'

function listPokemons() {
    const options = {
        method: "GET"
    }
    fetch(`${baseUrl}/pokemon`, options)
    .then(res => res.json())
    .then(data => {
        console.log('data' , data.results)
        data.results.forEach(el => {
            const p = document.createElement('p')
            const pokemon = document.createTextNode(el.name)
            p.appendChild(pokemon)
            list.appendChild(p)
        })
    })
} 
listPokemons()