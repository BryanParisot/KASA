import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <img src={props.logo} alt="Logo" />
      <div className="nav-link">
        <NavLink className="link" exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink exact to="/about" activeClassName="nav-active">
          A propos
        </NavLink>
      </div>
    </div>
  );
};
export default Navigation;
