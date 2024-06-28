import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",

  position: "relative",
  overflow: "hidden",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const CartButton = styled("button", {
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

export const ImageContainer = styled("div", {
  // height: 100,
  width: 100,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
