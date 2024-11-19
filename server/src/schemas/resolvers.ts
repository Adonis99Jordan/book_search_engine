import { getUser, getUserBooks, registerUser, loginUser, logoutUser, saveBook, deleteBook } from '../controllers/user_controller';

export const resolvers = {
    Query: {
        getUser: async (_: any, __: any, context: any) => {
            return await getUser(context);
        },
        getUserBooks: async (_: any, __: any, context: any) => {
            return await getUserBooks(context);
        },
    },
    Mutation: {
        registerUser: async (_: any, args: any) => {
            return await registerUser(args);
        },
        loginUser: async (_: any, args: any) => {
            return await loginUser(args);
        },
        logoutUser: async (_: any, context: any) => {
            return await logoutUser(context);
        },
        saveBook: async (_: any, args: any, context: any) => {
            return await saveBook(args, context);
        },
        deleteBook: async (_: any, args: any, context: any) => {
            return await deleteBook(args, context);
        },
    },
};
