import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import logoImg from "@/assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import { useState } from "react";
import { CartSidebar } from "@/components/CartSidebar";
import { CartProvider } from "use-shopping-cart";
import CartButton from "@/components/CartButton";

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
    <Container>
      <CartProvider
        mode="payment"
        shouldPersist={true}
        cartMode="client-only"
        stripe={process.env.STRIPE_SECRET_KEY}
        successUrl="stripe.com"
        cancelUrl="twitter.com/dayhaysoos"
        currency="USD"
        allowedCountries={["US", "GB", "CA"]}
        billingAddressCollection={true}
      >
        <Header>
          <Image src={logoImg} alt="" />
          <CartButton onClick={handleShowSidebar} />
        </Header>
      </CartProvider>

      <CartSidebar hideSidebar={hideSidebar} showSidebar={showSidebar} />
      <Component {...pageProps} />
    </Container>
  );
}
