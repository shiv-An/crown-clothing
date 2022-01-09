import React from 'react';
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInSignUp from './pages/signIn-signUp/SignInSignUp.component';
import { Route, Switch} from 'react-router-dom';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          this.setState({
          currentUser: {
            id:snapShot.id,
            ...snapShot.data()
          }
          })
        })
      }
      else {
        this.setState({currentUser:userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={ShopPage} />
       <Route path='/signin' component={SignInSignUp} />
       </Switch>
      </div>
    );
  } 
}

export default App;
