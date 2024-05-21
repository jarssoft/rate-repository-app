import { gql } from "@apollo/client";

const SIGNIN = gql`
  mutation Authenticate($authenticateCredentials: AuthenticateInput) {
    authenticate(credentials: $authenticateCredentials) {
      accessToken
      user {
        id
      }
    }
  }
`;

export const CREATEREVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      repositoryId
    }
  }
`;

export default SIGNIN;
