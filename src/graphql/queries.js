import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories(orderBy: CREATED_AT, orderDirection: ASC) {
      edges {
        node {
          fullName
          description
          language
          ownerAvatarUrl
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query {
    repository(id: "jaredpalmer.formik") {
      id
      fullName
      url
      description
      language
      ownerAvatarUrl
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      username
      id
    }
  }
`;
