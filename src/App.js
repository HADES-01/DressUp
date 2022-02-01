import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";
import { Route, Routes } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapshot) => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
