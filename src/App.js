import React, { Component } from 'react';
import AddJob from './AddJob'
import AcceptJob from './AcceptJob'
import Available from './AvailableJobs'
import MyJobs from './MyJobs'
import {BrowserRouter as Router, Switch, Route }  from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* {this.renderError()} */}
          <Switch>
            <Route exact path="/" component={AddJob} />
            <Route path= "/Available" component={Available} />
            <Route path= "/AcceptJob" component={AcceptJob} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
