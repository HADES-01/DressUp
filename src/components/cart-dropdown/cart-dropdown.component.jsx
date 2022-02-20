import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import "./cart-dropdown.styles.scss";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
