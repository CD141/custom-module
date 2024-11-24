
const fortunesArray = 7
//const fetch = require('node-fetch')

const getFortune = async () => {
    const rand = Math.floor(Math.random() * fortunesArray) + 1
    return (rand)
}

// const getFortuneByNumber = async number => {
    // const request = await require('./fortunes.json')
    // return await request.json()
// }

module.exports = {getFortune, /*getFortuneByNumber*/}
