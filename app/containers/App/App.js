import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Favorites from 'containers/Favorites/Loadable';
import Header from 'components/Header';
import TrailerPage from '../TrailerPage/Loadable';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet titleTemplate="%s - Mini Netflix" defaultTitle="Mini Netflix">
      <meta name="description" content="react js app" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/features/:trailerId" component={TrailerPage} />
      <Route exact path="/favorites" component={Favorites} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
