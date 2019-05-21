import React from 'react';
import {connect} from 'react-redux';
import {signUp} from '../actions';
import styled from 'styled-components';

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
      <FormContainer>

        <Form onSubmit={this.submitSignUp}>
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
        </Form>
      </FormContainer>
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

  const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 800px;
  width: 400px;
  margin: auto;
  color: black;
  p {
    text-align: center;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  input {
    width: 380px;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 18px;
    outline: none;
    background-color: rgb(232, 240, 254)
  }
  button {
    height: 50px;
    width: 380px;
    margin: 10px 0 10px 10px;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: blueviolet;
    cursor: pointer;
  }
`