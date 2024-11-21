
const fortunesArray = `fortunes.json`
//const fetch = require('node-fetch')

const getFortune = async () => {
    const rand = Math.floor(Math.random() * fortunesArray)
    return getFortune(rand)

}


module.exports = {getFortune}
