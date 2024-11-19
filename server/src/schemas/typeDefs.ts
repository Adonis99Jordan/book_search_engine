import { gql } from 'apollo-server-express';

export const typeDefs = gql`
type Book {
    googleBookId: String!
    authors: [String]!
    description: String
    title: String!
    image: String
    link: String
}

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Response {
    user: User
    message: String
}

type Query {
    getUser: Response
    getUserBooks: [Book]
}

type Mutation {
    registerUser(username: String!, email: String!): Response
    loginUser(email: String!, password: String!): Response
    logoutUser: Response
    savedBook(googleBookId: String!, authors: [String], title: String, description: String, image: String): Response
    deleteBook(googleBookId: String!): Response
}
`;