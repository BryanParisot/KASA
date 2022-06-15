import Navigation from "../components/Navigation/Navigation";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="not-found">
            <Navigation/>
            <div className="contain-not-found">
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas</p>
                <NavLink className="link-not-found" to="/"> Retounrer sur la page d'accueil</NavLink>
            </div>
        </div>
    );
};
export default NotFound