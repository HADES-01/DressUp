import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route, Routes } from "react-router";
import React from "react";
import { connect } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import {
  firestore,
  collectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionsRef = collection(firestore, "collections");
    onSnapshot(collectionsRef, async (snapshot) => {
      const collectionsMap = collectionSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
    });
  }
  render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" element={<CollectionOverview />} />
          <Route path={"/:collectionId"} element={<CollectionPage />} />
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
