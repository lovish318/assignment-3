import React from 'react';
import './App.css';
import Login from './container/Login'
import Home from './container/Home'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path='/home' component={Home} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
