import React from 'react';
import HomePage from './pages/homepage/Homepage.component';
import { Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <Switch>
     <Route path='/' component={HomePage} />
     </Switch>
    </div>
  );
}

export default App;
