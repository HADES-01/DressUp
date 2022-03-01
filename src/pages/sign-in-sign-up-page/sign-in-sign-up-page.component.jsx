import React from "react";
import { useState } from "react";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-sign-up-page.styles.scss";

const SingInSignUpForms = ({ loading, setLoading }) => (
  <div className="sign-in-sign-up">
    <SignIn isLoading={loading} setLoading={setLoading} />
    <SignUp isLoading={loading} setLoading={setLoading} />
  </div>
);

const SignInSignUpPage = () => {
  const [loading, setLoading] = useState(false);
  return WithSpinner(SingInSignUpForms)({
    isLoading: loading,
    loading,
    setLoading,
  });
};

export default SignInSignUpPage;
