import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import logoImg from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import { useState } from "react";
import { CartSidebar } from "@/components/CartSidebar";
import { CartProvider } from "use-shopping-cart";
import CartButton from "@/components/CartButton";
import Link from "next/link";

globalStyles();

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
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_SECRET_KEY}
      currency="BRL"
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Link href="/" prefetch={false}>
            <Image src={logoImg} alt="" />
          </Link>
          <CartButton onClick={handleShowSidebar} />
        </Header>

        <CartSidebar hideSidebar={hideSidebar} showSidebar={showSidebar} />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
