import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header';
import Pages from './pages';

import './App.css';

function App() {

  const routeComponents = Object.keys(Pages).map((key) => {
    const page = Pages[key];
    return (
      <Route exact path={page.path} component={page.component} key={key} />
    );
  });

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          { routeComponents }
          <Route path="*">
            <h1>whoops how did you get here?</h1>
          </Route>
        </Switch>

        <footer>
          Made with &lt;3 by Clara Beyer
        </footer>
      </Router>
    </div>
  );
}

export default App;
