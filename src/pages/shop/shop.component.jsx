import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Route, Routes } from "react-router";

function ShopPage() {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route path={"/:collectionId"} element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default ShopPage;
