import React from 'react';
import {connect} from 'react-redux';
import {signUp} from '../actions';


class SignUp extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
      email: ''
    }
    
  };

  handleSignupChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  submitSignUp = e => {
    e.preventDefault();
    this.props.signUp(this.state.user)
    .then(() => this.props.history.push('/'))
  };

  render() {
    return (
      <div>
        <p>Sign Up</p>
        <form onSubmit={this.submitSignUp}>
            <label>
                Username
                <input
                    type="text"
                    name="username"
                    value={this.state.user.username}
                    onChange={this.handleSignupChange}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.handleSignupChange}
                />
            </label>
            <label>
                email
                <input
                    type="email"
                    name="email" 
                    value={this.state.user.email}
                    onChange={this.handleSignupChange}
                />
            </label>
            <button>{this.props.signingUp ? "Loading" : "SignUp"}</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ signingUp }) => ({
    signingUp
  });
  
  export default connect(
    mapStateToProps,
    { signUp }
  )(SignUp);