//Dependencies
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import PageCard from "../pages/PageCard";
import PagePagination from "../pages/PagePagination";
import PageError from "../pages/PageError";

export default function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PageCard} />
        <Route path="/pagination" exact component={PagePagination} />
        <Route component={PageError} />
      </Switch>
    </Router>
  );
}
