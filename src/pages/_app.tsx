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
import { Handbag } from "phosphor-react";

globalStyles();

const itensAmount = 1;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <CartButton>
          {itensAmount > 0 && <CartItemsAmount>{itensAmount}</CartItemsAmount>}
          <Handbag
            size={24}
            className={String(itensAmount ? css({color: "$gray300"}) : css({color: "$gray500"}))}
          />
        </CartButton>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
