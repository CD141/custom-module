
const fortunesArray = fortunes.json
const fetch = require('node-fetch')

const getFortune = async () => {
    Math.floor(Math.random() * numPokemon)
}



module.exports = {getFortune}
