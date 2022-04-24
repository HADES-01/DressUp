import { connect } from "react-redux";
import { addItem, reduceItem, removeItem } from "../../redux/cart/cart.actions";
import {
  ArrowContainer,
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  StyledSpan,
} from "./checkout-item.styles";

function CheckoutItem({ cartItem, removeItem, addItem, reduceItem }) {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <StyledSpan>{name}</StyledSpan>
      <StyledSpan>
        <ArrowContainer onClick={() => reduceItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        <StyledSpan>{quantity}</StyledSpan>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </StyledSpan>
      <StyledSpan>${price}</StyledSpan>
      <RemoveButton onClick={() => removeItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

const mapDispatchToprops = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  reduceItem: (item) => dispatch(reduceItem(item)),
});

export default connect(null, mapDispatchToprops)(CheckoutItem);
