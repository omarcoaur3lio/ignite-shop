import { HomeContainer, Product } from "@/styles/home";
import Image from "next/image";

import shirt1 from "@/assets/shirts/1.png";
import shirt2 from "@/assets/shirts/2.png";
// import shirt3 from '@/assets/shirts/3.png'
export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image alt="" src={shirt1} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image alt="" src={shirt2} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
