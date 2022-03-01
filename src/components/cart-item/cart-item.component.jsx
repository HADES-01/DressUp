import { CartItemContainer, ItemDetailsContainer } from "./cart-item.styles";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">${price} x {quantity}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
