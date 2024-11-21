
(async () => {

    const {getFortune} = require('./fortunetell')

    const fortunes = require('./fortunes.json')
    console.log(fortunes)

    const getRanbomFortune = getFortune()

    console.log(getRanbomFortune.fortunes)

})()
