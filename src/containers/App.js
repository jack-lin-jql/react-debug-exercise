import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
// import Footer from '../components/Footer';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSession = this.handleSession.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ showLoginForm: true });
  }

  handleSession() {
    this.refs.navbuttons.handleLoginButton();
    this.setState({ showLoginForm: false });
  }

  handleLogout() {
    this.refs.navbuttons.handleLogoutButton();
    this.setState({ showLoginForm: false });
  }

  render() {
    return (
      <div className='app'>
        <Navbar ref='navbuttons' handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        <div className={this.state.showLoginForm === true ? '' : 'hide'}>
          <LoginForm handleSession={this.handleSession} />
        </div>
      </div>
    );
  }
}

export default App;
