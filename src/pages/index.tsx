import { HomeContainer, Product } from "@/styles/home";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import shirt1 from "@/assets/shirts/1.png";
import shirt2 from "@/assets/shirts/2.png";
import shirt3 from '@/assets/shirts/3.png'
export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image alt="" src={shirt1} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image alt="" src={shirt2} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image alt="" src={shirt3} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image alt="" src={shirt3} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
