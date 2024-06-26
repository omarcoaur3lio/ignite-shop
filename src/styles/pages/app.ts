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

export const CartViewSideBar = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: "1.5rem",

  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: 480,
  padding: "3rem",

  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

  zIndex: 2,

  transform: "translateX(100%)",
  transition: "transform 0.2s ease-in-out",

  maxHeight: "100vh",

  "&.active": {
    transform: "translateX(0)",
  },

  svg: {
    color: "$gray500",
    position: "absolute",
    top: 24,
    right: 24,

    cursor: "pointer",

    transition: "color 0.2s",

    "&:hover": {
      color: "$gray100",
    },
  },

  "div.cart-content": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    flex: 1,

    strong: {
      color: "$gray100",
      fontSize: "$lg",
      fontWeight: "bold",
    },

    div: {
      display: "flex",
      flexDirection: "column",
    },

    "div.productList": {
      gap: "1.5rem",
      marginTop: "2rem",
      maxHeight: "calc(100vh - 450px)",

      overflowY: "scroll",

      "&::-webkit-scrollbar": {
        width: "2px",
      },
      "&::-webkit-scrollbar-track": {
        background: "$gray700",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "$gray500",
        borderRadius: "6px",
      },

      "div.product": {
        display: "flex",
        flexDirection: "row",
        gap: "1.25rem",
        color: "$gray300",

        strong: {
          fontSize: "$md",
          marginTop: "0.25rem",
        },

        button: {
          border: 0,
          backgroundColor: "transparent",
          cursor: "pointer",

          marginTop: "0.5rem",
          alignSelf: "flex-start",
          color: "$green500",

          fontSize: "1rem",
          fontWeight: "bold",
          lineHeight: 1.6,

          transition: "color 0.2s",

          "&:hover": {
            color: "$green300",
          },
        },
      },
    },

    footer: {
      div: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",

        marginTop: "0.5rem",
        color: "$gray100",

        span: {
          color: "$gray300",
        },

        p: {
          fontSize: "$md",
          fontWeight: "bold",
        },

        strong: {
          fontSize: "$xl",
          fontWeight: "bold",
        },
      },

      button: {
        width: "100%",
        backgroundColor: "$green500",
        border: 0,
        borderRadius: 8,
        fontSize: "$md",
        fontWeight: "bold",
        color: "$white",
        padding: "1.25rem",
        marginTop: "3.375rem",
        cursor: "pointer",
        transition: "background-color 0.2s",

        "&:disabled": {
          opacity: 0.6,
          cursor: "not-allowed",
        },

        "&:not([disabled]):hover": {
          backgroundColor: "$green300",
        },
      },
    },
  },
});
