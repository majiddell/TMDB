import react, { useEffect } from "react";
import { useDispatch } from "react-redux";

import FetchMovie from "./actions/movieAction";

import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";

import { Route, Switch } from "react-router-dom";

import Movie from "./pages/Movie";
import TV from "./pages/TV";
import Person from "./pages/Person";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/movie/:id" exact>
            <Movie />
          </Route>

          <Route path="/tv/:id" exact>
            <TV />
          </Route>

          <Route path="/person/:id" exact>
            <Person />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
