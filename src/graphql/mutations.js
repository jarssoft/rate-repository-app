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

export default SIGNIN;
