const fetch = require('node-fetch')

module.exports = {

    getChampionByName: async function (name) {
        fetch(`https://ddragon.leagueoflegends.com/cdn/8.24.1/data/pt_BR/champion/${args.name}.json`).then(res => res.json()).then(json => json.data.name)
    }

}

