const fetch = require('node-fetch')

module.exports = {

    getChampionByName: async function (name) {
        return fetch(`https://ddragon.leagueoflegends.com/cdn/8.24.1/data/pt_BR/champion/${name}.json`).then(res => res.json()).then(json => json.data[name])
    }

}

