import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { css } from "@stitches/react";

import logoImg from "@/assets/logo.svg";
import {
  CartButton,
  CartItemsAmount,
  CartViewSideBar,
  Container,
  Header,
  ImageContainer,
} from "@/styles/pages/app";
import Image from "next/image";
import { Handbag, X } from "phosphor-react";
import { useState } from "react";

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
      <CartViewSideBar className={showSidebar}>
        <X size={24} onClick={hideSidebar} />
        <div className="cart-content">
          <div>
            <strong>Sacola de compras</strong>

            <div className="productList">
              {Array.from({ length: 12 }).map((_, index) => {
                return (
                  <div className="product" key={index}>
                    <ImageContainer>
                      <main key={index}>Product</main>
                    </ImageContainer>
                    <div>
                      <span>Camiseta Beyond the Limits</span>
                      <strong>R$ 79,90</strong>
                      <button>Remover</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <footer>
            <div>
              <span>Quantidade</span>
              <span>2 itens</span>
            </div>
            <div>
              <p>Valor total</p>
              <strong>R$ 270,00</strong>
            </div>

            <button>Finalizar compra</button>
          </footer>
        </div>
      </CartViewSideBar>
      <Component {...pageProps} />
    </Container>
  );
}
