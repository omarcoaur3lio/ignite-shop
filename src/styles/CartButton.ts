import { styled } from ".";

export const CartButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: 0,
  padding: "0.75rem",
  borderRadius: 6,
  backgroundColor: "$gray800",
  color: "$gray500",
  cursor: "pointer",

  position: "relative",

  transition: "background 0.2s",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    backgroundColor: "$gray700",
  },
});

export const CartItemsAmount = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  padding: "0.75rem",
  borderRadius: "50%",
  fontSize: "0.875rem",
  backgroundColor: "$green300",
  color: "$gray100",
  border: "3px solid $gray900",

  position: "absolute",
  top: "-12px",
  right: "-12px",

  fontWeight: "bold",
});