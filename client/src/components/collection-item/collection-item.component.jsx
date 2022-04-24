import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  AddToCartButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl}></ImageContainer>
      <CollectionFooterContainer>
        <div className="name">{name}</div>
        <div className="price">${price}</div> 
      </CollectionFooterContainer>
      <AddToCartButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
