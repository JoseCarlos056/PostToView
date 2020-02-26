import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home'
import ProtectedRoute from './ProtectedRoute'
class Routes extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
  console.log(props,'aaaaa')
    }
    render() {
      return (
        <Router>
          <div className="App">
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/App" >
                  <ProtectedRoute exact path="/App/index" component={(props) => <Home {...props} />} />
            </Route>
            <Route  path="*" component={()=>{return(<h1>404</h1>)}} />
            </Switch>
          </div>
        </Router>
      )
    }
  }
  
  export default Routes