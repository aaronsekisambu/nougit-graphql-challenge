import { GraphQLServer } from "graphql-yoga";
import  db from '../db/entries.json';

const resolvers = {
  Query: {
    author: () => db.map(d => d.author),
    details: () => db
  },

};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
