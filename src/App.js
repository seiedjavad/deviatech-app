import Home from "./pages/site/Home/Home";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import PublicRoute from "./routes/routes";

function App() {
  return (
      <Router>
          <Switch>
              <PublicRoute Component={Home} path={'/'} exact/>
          <Home/>
          </Switch>
      </Router>
  );
}

export default App;
