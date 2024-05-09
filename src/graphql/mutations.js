import { gql } from "@apollo/client";

const SIGNIN = gql`
  mutation Authenticate {
    authenticate(credentials: { password: "password", username: "kalle" }) {
      user {
        id
      }
    }
  }
`;

export default SIGNIN;
