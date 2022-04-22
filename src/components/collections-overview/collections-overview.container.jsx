import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import { selectIsFetchingCollections } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import CollectionOverview from "./collections-overview.component";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCollections,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
