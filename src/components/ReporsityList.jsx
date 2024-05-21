import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./ReporsityListContainer";
import { useState } from "react";

const RepositoryList = () => {
  const [by, setBy] = useState("RATING_AVERAGE");
  const [direction, setDirection] = useState("DESC");
  const { repositories } = useRepositories(by, direction);

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
