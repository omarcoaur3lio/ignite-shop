import { styled } from ".";

export const CartViewSideBarContainer = styled("div", {
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
