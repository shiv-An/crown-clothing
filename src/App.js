import React from 'react';
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import { Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <Switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/shop' component={ShopPage} />
     </Switch>
    </div>
  );
}

export default App;
