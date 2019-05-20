import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';




class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => this.props.history.push('/'))
  };

  routeChange = e => {
      e.preventDefault();
      let path = '/register';
      this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <p>Log In</p>
        <form onSubmit={this.login}>
            <label>
                Username
            
                <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
            </label>
            <button>{this.props.loggingIn ? "Loading" : "Login"}</button>
            
            <button onClick={this.routeChange}>Register</button>
            
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
  });
  
  export default connect(
    mapStateToProps,
    { login }
  )(Login);