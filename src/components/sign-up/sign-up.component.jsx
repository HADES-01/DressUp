import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }
    try {
      console.log(email, password);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a Account.</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label={"Display Name"}
            required
          />
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            label={"Email"}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label={"Password"}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label={"Confirm Password"}
            required
          />
          <CustomButton type="Submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
