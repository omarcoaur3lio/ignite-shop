import { CartButtonContainer, CartItemsAmount } from "@/styles/CartButton";
import { css } from "@stitches/react";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

interface CartButtonProps {
  onClick: () => void;
}
export default function CartButton({ onClick }: CartButtonProps) {
  const { cartCount } = useShoppingCart();
  return (
    <CartButtonContainer onClick={onClick}>
      <CartItemsAmount>{cartCount}</CartItemsAmount>
      <Handbag
        size={24}
        className={String(
          cartCount ? css({ color: "$gray300" }) : css({ color: "$gray500" })
        )}
      />
    </CartButtonContainer>
  );
}
