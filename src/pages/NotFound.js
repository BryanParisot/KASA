import Navigation from "../components/Navigation/Navigation";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <Navigation logo="./pictures/LOGO.png" />
        <div className="contain-not-found">
          <div className="first_element">
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas</p>
          </div>
          <NavLink className="link-not-found" to="/">
            {" "}
            Retourner sur la page d'accueil
          </NavLink>
        </div>
      </div>
      <Footer img="../pictures/LOGO-WHITE.png" />
    </>
  );
};
export default NotFound;
