import React from "react";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import toggleCartHidden from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
function CartIcon({ toggleCartHidden, items }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{items}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  items: cartItems.length,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
