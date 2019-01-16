require('dotenv').config();
const updateHelper = require('./helpers/update.resources.version');
const schedule = require('node-schedule');

const express = require('express');
const app = express();
const port = process.env.APP_PORT || 4000;
const graphqlHTTP = require('express-graphql');

const schema = require('./schemas/schema.js');
// const schema = require('./schema.js');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

app.listen(port);
console.log(`Listening on port ${port}`);

// var j = schedule.scheduleJob('0 0 14,28 * *', function(fireDate){
//   updateHelper.updateResourceVersions();
// });

