import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Query(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $repositoriesSearchKeyword: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $repositoriesSearchKeyword
    ) {
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
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
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
