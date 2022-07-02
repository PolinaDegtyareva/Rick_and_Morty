async function getAlive() {
    let response = await fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive')
    let text = await response.text()
    console.log (text)
}

getAlive()

async function getLocation() {
    let response1 = await fetch ('https://rickandmortyapi.com/api/location/3')
    let text1 = await response1.text()
    console.log (text1)
}

getLocation()