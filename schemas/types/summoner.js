const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql');

// const profileIconId = new GraphQLObjectType({
//     name: 'ProfileIconId',
//     description: '...',

//     fields: () => ({
//         profileIconId: {
//             type: GraphQLInt,
//             resolve: id => id
//         },
//         profileImage: {
//             type: GraphQLString,
//             resolve: id => `http://ddragon.leagueoflegends.com/cdn/6.3.1/img/profileicon/${id}.png`
//         }
//     })
// })

module.exports = {
    SummonerType: new GraphQLObjectType({
        name: 'Summoner',
        description: 'Represents a summoner',
    
        fields: () => ({
            name:{
                type: GraphQLString,
            },
            summonerLevel: {
                type: GraphQLInt,
            },
            profileIconId:{
                type: GraphQLInt
            },
            id:{
                type: GraphQLString
            },
            accountId: {
                type: GraphQLString
            },
            puuid:{
                type: GraphQLString
            }
        })
    })
}