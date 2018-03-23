import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import {Login} from './components/Login/Login'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		userName: "empty"
  	}
  	this.changeUserState = this.changeUserState.bind(this);
  }

  changeUserState(name) {
  	this.setState({userName: name})
  }

  render() {
    return (
      <Router>
      	<div className="App" style={{height: "100%"}}>
        	<Route exact path='/' component={Login} userState={this.state.userName}/>
        	<Route exact path='/main' component={Layout} changeUserState={this.changeUserState} />
        </div>
      </Router>
    );
  }
}

export default App;
