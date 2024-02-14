
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './_auth/SignIn';
import Info from './pages/Info';

function App() {
  return (
    <Router>
      <Switch>
        <Route index path='/signin' component={SignIn} />
        <Route path="/info" component={Info} />
      </Switch>
    </Router>
  );
}

export default App;
