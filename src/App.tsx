import React from 'react';
import './App.css';
import PageHeader from './components/page-header/index'
import Articles from './components/content/index'
import Sites from './components/sites/index'
import Donators from './components/donators/index'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App max-w-3xl mx-auto pb-6">
        <PageHeader/>
        <Switch>
          <Route path="/sites">
            <Sites/>
          </Route>
          <Route path="/">
            <Articles/>
          </Route>
        </Switch>
        <Donators/>
      </div>
    </Router>
  );
}

export default App;
