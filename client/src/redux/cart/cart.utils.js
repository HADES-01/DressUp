export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const reduceCartItem = (cartItems, itemToReduce) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToReduce.id
  );
  if (existingCartItem.quantity === 1) {
    return removeItemFromCart(cartItems, existingCartItem);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToReduce.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
