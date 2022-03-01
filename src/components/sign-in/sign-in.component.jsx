import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.props.setLoading(true);
    const { email, password } = this.state;
    try {
      this.setState({ email: "", password: "" });
      await signInWithEmailAndPassword(auth, email, password);
      this.props.setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title"> I already have an account</h2>
        <span>Sign in with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
            label={"EMAIL"}
          />
          <FormInput
            type="password"
            name="password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
            label="PASSWORD"
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
