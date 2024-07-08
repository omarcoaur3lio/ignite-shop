import {
  CartViewSideBarContainer,
  EmptyCartContainer,
} from "@/styles/CartSidebar";
import { ImageContainer } from "@/styles/pages/app";
import axios from "axios";
import Image from "next/image";
import { X, Handbag } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

interface CartSidebarProps {
  showSidebar: string;
  hideSidebar(): void;
}

export function CartSidebar({ showSidebar, hideSidebar }: CartSidebarProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { cartCount, cartDetails, removeItem, formattedTotalPrice, clearCart } =
    useShoppingCart();

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        items: cartDetails,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar para o checkout");
    }
  }

  return (
    <CartViewSideBarContainer className={showSidebar}>
      <X size={24} onClick={hideSidebar} />
      <div className="cart-content">
        <div>
          <strong>Sacola de compras</strong>

          <div className="productList">
            {cartCount === 0 ? (
              <EmptyCartContainer>
                <Handbag size={48} />
                <p>Sua sacola esta vazia. Adicione itens na loja.</p>
              </EmptyCartContainer>
            ) : (
              Object.entries(cartDetails).map(([key, product]) => {
                return (
                  <div className="product" key={key}>
                    <ImageContainer>
                      <Image
                        src={product.image}
                        alt=""
                        width={100}
                        height={93}
                      />
                    </ImageContainer>
                    <div>
                      <span>{product.name}</span>
                      <strong>{product.formattedValue}</strong>
                      <button onClick={() => removeItem(key)}>Remover</button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <footer>
          <div>
            <span>Quantidade</span>
            <span>{cartCount} itens</span>
          </div>
          <div>
            <p>Valor total</p>
            <strong>{cartCount ? formattedTotalPrice : "R$ 0,00"}</strong>
          </div>

          <button
            disabled={isCreatingCheckoutSession || cartCount === 0}
            onClick={handleBuyProduct}
          >
            Finalizar compra
          </button>
        </footer>
      </div>
    </CartViewSideBarContainer>
  );
}
