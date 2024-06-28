import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { css } from "@stitches/react";

import logoImg from "@/assets/logo.svg";
import {
  CartButton,
  CartItemsAmount,
  Container,
  Header,
} from "@/styles/pages/app";
import Image from "next/image";
import { Handbag, X } from "phosphor-react";
import { useState } from "react";
import { CartSidebar } from "@/components/CartSidebar";

globalStyles();

const itensAmount = 1;

export default function App({ Component, pageProps }: AppProps) {
  const [showSidebar, setShowSidebar] = useState("");

  function handleShowSidebar() {
    setShowSidebar("active");
  }

  function hideSidebar() {
    if (showSidebar === "active") {
      setShowSidebar("");
    }
  }

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <CartButton onClick={handleShowSidebar}>
          {itensAmount > 0 && <CartItemsAmount>{itensAmount}</CartItemsAmount>}
          <Handbag
            size={24}
            className={String(
              itensAmount
                ? css({ color: "$gray300" })
                : css({ color: "$gray500" })
            )}
          />
        </CartButton>
      </Header>
      <CartSidebar hideSidebar={hideSidebar} showSidebar={showSidebar} />
      <Component {...pageProps} />
    </Container>
  );
}
