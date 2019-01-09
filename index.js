require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.APP_PORT || 4000;
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

app.listen(port);
console.log(`Listening on port ${port}`);
