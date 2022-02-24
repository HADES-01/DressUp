import "./collection.styles.scss";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectCollection } from "../shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

function CollectionPage() {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <div className="collection-item">
            <CollectionItem key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
