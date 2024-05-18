import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories(orderBy: CREATED_AT, orderDirection: ASC) {
      edges {
        node {
          id
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
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
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
