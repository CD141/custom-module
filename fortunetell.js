
const fortunesArray = './fortunes.json'
//const fetch = require('node-fetch')

const getFortune = async () => {
    const rand = Math.floor(Math.random() * fortunesArray.length) + 1
    return fortunesArray[rand]
}

// const getFortuneByNumber = async number => {
    // const request = await require('./fortunes.json')
    // return await request.json()
// }

module.exports = {getFortune, /*getFortuneByNumber*/}
