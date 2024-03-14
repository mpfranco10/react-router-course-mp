import { Link, useLocation } from "react-router-dom";
import { slugify } from "../utils";

const CustomLink = ({ to, children }) => {
  const location = useLocation();
  const playerId = location.pathname.split("/")[2];
  const match = playerId === to;

  const styles = match ? { fontWeight: 900, color: "var(--white)" } : {};

  return (
    <li>
      <Link
        style={{ ...styles }}
        to={{ pathname: to, search: location.search }}
      >
        {children}
      </Link>
    </li>
  );
};

const Sidebar = ({ title, list }) => {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink key={item} to={slugify(item)}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
