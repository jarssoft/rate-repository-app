import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./ReporsityListContainer";

const RepositoryList = () => {
  const { repositories } = useRepositories("RATING_AVERAGE", "DESC");

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
