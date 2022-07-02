async function getAlive() {
    let response = await fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive')
    let text = await response.text()
    console.log (text)
}

getAlive()

