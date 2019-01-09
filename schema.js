const api_key = process.env.API_KEY;
const fetch = require('node-fetch');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql');

const profileIconId = new GraphQLObjectType({
    name: 'ProfileIconId',
    description: '...',

    fields: () => ({
        profileIconId: {
            type: GraphQLInt,
            resolve: id => id
        },
        profileImage: {
            type: GraphQLString,
            resolve: id => `http://ddragon.leagueoflegends.com/cdn/6.3.1/img/profileicon/${id}.png`
        }
    })
})

const SummonerType = new GraphQLObjectType({
    name: 'Summoner',
    description: '...',

    fields: () => ({
        summonerLevel: {
            type: GraphQLInt,
        },
        name:{
            type: GraphQLString,
        },
        profileIconId:{
            type: profileIconId
        }
    })
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',
        fields: () => ({
            summoner:{
                type: SummonerType,
                args: {
                    summonerName: {type: GraphQLString}
                } ,
                resolve: (root, args) => fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${args.summonerName}?api_key=${api_key}`).then(res => res.json())
            }
        })
    })
});
