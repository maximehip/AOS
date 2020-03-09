import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import Success from './Success';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div class="container">
            <div class="row mt-5">
              <div class="col-md-6 m-auto">
                <div class="card card-body">
                  <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/success" component={Success} />
                  </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Router>
    );
  }
}




export default App;
