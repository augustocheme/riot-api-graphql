const api_key = process.env.API_KEY;
const fetch = require('node-fetch');

const championResolver = require('../resolvers/champion');

const {
    // GraphQLInt,
    // GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} = require('graphql');

const summonerType = require('./types/summoner');
const championType = require('./types/champion');


const queryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Query against any endpoint on Riot API',

    fields: () =>({
        summoner: {
            type: summonerType.SummonerType,
            args: {
              name: {
                type: new GraphQLNonNull(GraphQLString),
              },
              region: {
                type: new GraphQLNonNull(GraphQLString),
              },
            },
            resolve: (root, args) => fetch(`https://${args.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${args.name}?api_key=${api_key}`).then(res => res.json())
          },
          champion: {
              type: championType.ChampionType,
              args:{
                  name: {
                      type: new GraphQLNonNull(GraphQLString)
                  }
              },
              resolve: (root,args) => championResolver.getChampionByName(args.name)
          },
    })
});


module.exports = new GraphQLSchema({
    query: queryType
});