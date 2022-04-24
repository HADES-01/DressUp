import React from "react";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-sign-up-page.styles.scss";
import { selectIsUserLoading } from "../../redux/user/user.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const SingInSignUpForms = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserLoading,
});

export default connect(mapStateToProps)(WithSpinner(SingInSignUpForms));
