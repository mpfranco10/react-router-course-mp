import { useEffect, useState } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import Sidebar from "./Sidebar";

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const [team, setTeam] = useState(searchParams.get("teamId"));

  const { response: names, loading } = usePlayerNames(team);

  useEffect(() => {
    if (location.search === "") {
      searchParams.delete("teamId");
      setTeam(null);
    } else {
      setTeam(searchParams.get("teamId"));
    }
  }, [location.search, searchParams]);

  if (loading) {
    return null;
  }

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={names} />

      <Outlet />
    </div>
  );
};

export default Players;
