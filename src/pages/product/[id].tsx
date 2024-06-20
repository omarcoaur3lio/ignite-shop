import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptas expedita maxime magnam quam cum, blanditiis ad velit quasi
          repellat sunt nulla rem? Accusantium, mollitia. Iure neque itaque
          odit! Odit.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
