import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'

import 'primereact/resources/themes/saga-orange/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'



import Layout from './layout/Layout'
import Home from './components/Home'
import LoginContainer from './components/LoginContainer'
import Landing from './components/Landing';

function App(props) {
  
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path={'/'} component={Landing}></Route>
            <Route path="/login" render={()=> <LoginContainer user={this.props.user} />} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
