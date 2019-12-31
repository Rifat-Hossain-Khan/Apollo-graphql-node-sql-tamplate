const express = require('express');
const { ApolloServer} = require('apollo-server-express');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);