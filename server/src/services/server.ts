import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from '../schemas/typeDefs';
import { resolvers } from '../schemas/resolvers';
import http from 'http';

const app = express();

// Create an Apollo Server instance 
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Start the Apollo Server 
async function startApolloServer() {
    await server.start();

    app.use('/graphql', expressMiddleware(server, {
        context: async ({req}) => ({req})
    }));

    const httpServer = http.createServer(app);

    httpServer.listen({port:4000}, () => {
        console.log('Server is running at http://localhost:4000/graphql');
    });
}

startApolloServer();