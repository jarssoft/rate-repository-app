import { render, screen } from "@testing-library/react-native";
import RepositoryListContainer from "../components/ReporsityListContainer";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);

      //screen.debug();

      screen.getAllByText("21.9k");

      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      //name, description, language, forks count, stargazers count, rating average, and review
      expect(firstRepositoryItem).toHaveTextContent("jaredpalmer/formik");
      expect(firstRepositoryItem).toHaveTextContent(
        "Build forms in React, without the tears"
      );
      expect(firstRepositoryItem).toHaveTextContent("TypeScript");
      expect(firstRepositoryItem).toHaveTextContent("1.6k");
      expect(firstRepositoryItem).toHaveTextContent("21.9k");
      expect(firstRepositoryItem).toHaveTextContent("88");
      expect(firstRepositoryItem).toHaveTextContent("3");
      expect(firstRepositoryItem).not.toHaveTextContent("1.8k");

      expect(secondRepositoryItem).toHaveTextContent(
        "async-library/react-async"
      );

      const keyValues = screen.getAllByTestId("keyValue");
      const [, second, third, fourth, fifth] = keyValues;

      //name, description, language, forks count, stargazers count, rating average, and review
      expect(second).toHaveTextContent(/^1.6kForks$/);
      expect(third).toHaveTextContent(/^3Reviews$/);
      expect(fourth).toHaveTextContent(/^88Rating$/);
      expect(fifth).toHaveTextContent(/^1.8kStars$/);
    });
  });
});
