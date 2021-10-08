import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import 'primereact/resources/themes/saga-orange/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'



import Layout from './layout/Layout'
import LoginContainer from './components/LoginContainer'
import Landing from './components/Landing';
import Home from './components/Home';


import { useSelector, useDispatch } from 'react-redux'

function User(){
  const user = useSelector(state => state.user);
  return <>{user.isAuthenticated?'yes':'no'}</>

}
class App extends React.Component {
  
  render(){
    

    this.state = {
      isUserAuthenticated: false
    }

    return (
      <div>
        <User/>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" render={() => {
                  return (
                    this.state.isUserAuthenticated ?
                    <Redirect to="/home" /> :
                    <Redirect to="/landing" /> 
                  )
                }}
              >
              </Route>
              <Route path={'/landing'}>
                <Landing />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <LoginContainer />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
  
}

export default App;
