import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 28px;
  margin: 15px auto;
`;
