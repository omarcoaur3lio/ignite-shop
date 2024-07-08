import { AddProductButton, HomeContainer, Product } from "@/styles/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import Link from "next/link";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
    defaultPrice: number;
  }[];
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
  defaultPrice: number;
}
export default function Home({ products }: HomeProps) {
  const { addItem, cartDetails } = useShoppingCart();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  function handleAddProductToCart(product: Product) {
    addItem({
      id: product.id,
      name: product.name,
      image: product.imageUrl,
      currency: "BRL",
      price: product.defaultPrice,
      price_id: product.defaultPriceId,
      description: product.description,
    });
  }

  return (
    <>
      <Head>
        <title>Ignite Shop | Home</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          const productAlreadyInCart = cartDetails[product.id];
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={true}>
                <Image alt="" src={product.imageUrl} width={520} height={480} />
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <AddProductButton
                  disabled={!!productAlreadyInCart}
                  onClick={() => handleAddProductToCart(product)}
                >
                  <Handbag size={32} weight="bold" />
                </AddProductButton>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  console.log(response.data);

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatCurrencyString({
        currency: "BRL",
        value: price.unit_amount,
        language: "pt-BR",
      }),
      description: product.description,
      defaultPriceId: price.id,
      defaultPrice: price.unit_amount,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
