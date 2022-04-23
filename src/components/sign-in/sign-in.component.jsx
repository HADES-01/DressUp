import React, { Component } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

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
    const { emailSignInStart} = this.props;
    emailSignInStart(this.state);
    this.setState({ email: "", password: "" });
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
