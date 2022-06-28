import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Announce from "./pages/Announce";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/announce/:id" exact component={Announce} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
