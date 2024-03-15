import { Outlet, useParams } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Sidebar from "./Sidebar";

const Articles = () => {
  const { teamId } = useParams();
  const { response: articles, loading } = useTeamsArticles(teamId);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container two-column">
      <Sidebar
        title="Articless"
        list={articles.map((article) => article.title)}
      />

      <Outlet />
    </div>
  );
};

export default Articles;
