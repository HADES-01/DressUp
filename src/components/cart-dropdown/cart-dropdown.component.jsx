import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";

function CartDropdown({ cartItems, dispatch }) {
  const navigate = useNavigate();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Cart is Empty !!!</EmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          navigate("/checkout");
        }}
      >
        {" "}
        Go To Checkout
      </CustomButton>
    </CartDropdownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
