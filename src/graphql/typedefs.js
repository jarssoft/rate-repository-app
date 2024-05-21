const typeDefs = `
  type AuthenticateInput {
    username: String!
    password: String!
  }
  type CreateReviewInput {
    owner: String!
    name: String!
    rating: Number!
    review: String
  }
`;
module.exports = typeDefs;
