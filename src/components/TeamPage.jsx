import { useParams } from "react-router-dom";

const TeamPage = () => {
  const { teamId } = useParams();
  return <div>Team page for {teamId}</div>;
};

export default TeamPage;
