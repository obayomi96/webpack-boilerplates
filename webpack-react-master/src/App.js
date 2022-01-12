import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import AnotherPage from './views/AnotherPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/page2' exact component={AnotherPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
