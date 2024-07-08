import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  ".productList": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4rem",
    width: "100%",
    paddingLeft: "10%",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "color 0.2s",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 140,
  height: 140,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: "50%",
  padding: "0.25rem",
  marginLeft: "-10%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",

  img: {
    objectFit: "cover",
  },
});
