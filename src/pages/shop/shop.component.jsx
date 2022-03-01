import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route, Routes } from "react-router";
import React from "react";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { collection, onSnapshot } from "firebase/firestore";
import {
  firestore,
  collectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionsRef = collection(firestore, "collections");
    onSnapshot(collectionsRef, async (snapshot) => {
      const collectionsMap = collectionSnapshotToMap(snapshot);
      await this.props.updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            path="/"
            element={WithSpinner(CollectionOverview)({ isLoading: loading })}
          />
          <Route
            path={"/:collectionId"}
            element={WithSpinner(CollectionPage)({ isLoading: loading })}
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
