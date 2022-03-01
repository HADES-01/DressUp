import styled, { css } from "styled-components";

const googleSignInStyles = css`
  background-color: #4285f4;

  border: none;
  color: white !important;
  &:hover {
    background-color: #357ae8;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const baseStyles = css`
  border: none;
  background-color: black;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

function getButtonStyles({ isGoogleSignIn, isInverted }) {
  if (isGoogleSignIn) {
    return googleSignInStyles;
  }

  return isInverted ? invertedStyles : baseStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  ${getButtonStyles}
`;
