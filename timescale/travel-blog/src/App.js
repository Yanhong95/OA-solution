import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import About from '../src/containers/About/About'
import './App.scss';

function App() {
  let routes = (
    <Switch>
      <Route path="/About" exact component={About} />
      <Route path="/Home" key="home" />
      <Route path="/Blog" key="blog" />
    </Switch>
  );

  return (
    <div className="app">
      <div className="app-navbar">
        <div className="app-navbar__logo">
          <p>Travelize</p>
          <i>My travelling experiences</i>
        </div>
        <div className="app-navbar__navs">
          <NavLink to="/Home" activeClassName='active'>Home</NavLink>
          <NavLink to="/Blog" activeClassName='active'>Blog</NavLink>
          <NavLink to="/About" activeClassName='active' >About</NavLink>
        </div>
      </div>
      {routes}
      <footer className="app-footer">
        <p className="app-footer__name">@2020 Travelize</p>
        <p className="app-footer__policy">Privacy Policy Terms and comditions</p>
      </footer>
    </div>
  );
}

export default App;
