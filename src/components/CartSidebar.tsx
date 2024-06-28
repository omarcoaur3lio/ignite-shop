import { CartViewSideBarContainer } from "@/styles/CartSidebar";
import { ImageContainer } from "@/styles/pages/app";
import { X } from "phosphor-react";

interface CartSidebarProps {
  showSidebar: string;
  hideSidebar(): void;
}

export function CartSidebar({ showSidebar, hideSidebar }: CartSidebarProps) {
  return (
    <CartViewSideBarContainer className={showSidebar}>
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
    </CartViewSideBarContainer>
  );
}
