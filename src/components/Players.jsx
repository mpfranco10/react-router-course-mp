import { useLocation, useSearchParams } from "react-router-dom";

const Players = () => {
  const location = useLocation();
  const [searchParms] = useSearchParams(location.search);

  const team = searchParms.get("teamId");

  return <div className="container">Players for team {team}</div>;
};

export default Players;
