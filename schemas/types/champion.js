const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} = require('graphql');

module.exports = {
    ChampionType: new GraphQLObjectType({
        name: 'Champion',
        description: 'This object contains champion data',
    
        fields: () => ({
            allytips: { type: new GraphQLList(GraphQLString) },
            blurb: { type: GraphQLString },
            enemytips: { type: new GraphQLList(GraphQLString) },
            id: { type: GraphQLInt },
            // image: { type: ImageType },
            // info: { type: InfoType },
            key: { type: GraphQLString },
            lore: { type: GraphQLString },
            name: { type: GraphQLString },
            partype: { type: GraphQLString },
            // passive: { type: PassiveType },
            // recommended: { type: new GraphQLList(RecommendedType) },
            // skins: { type: new GraphQLList(SkinType) },
            // spells: { type: new GraphQLList(SpellType) },
            // stats: { type: StatsType },
            tags: { type: new GraphQLList(GraphQLString) },
            title: { type: GraphQLString },
        })
    })
}