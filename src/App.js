import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Announce from "./pages/Announce";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useFetch } from "./utils/hooks";

const GuardedRoute = ({ component: Component, data, ...rest }) => {
  const currentId = rest.computedMatch.params.id;
  const userExists = data.find((user) => user.id === currentId);

  return (
    <Route
      {...rest}
      render={(props) =>
        userExists ? <Component {...props} /> : <Redirect to="/404" />
      }
    />
  );
};

const App = () => {
  const data = useFetch("../json/data.json");

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <GuardedRoute
          path="/announce/:id"
          exact
          component={Announce}
          data={data}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
