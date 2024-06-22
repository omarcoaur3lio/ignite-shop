import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer>{/* <Image /> */}</ImageContainer>
      <p>
        Uhuul <strong>John Doe</strong>, sua{" "}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>
      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
