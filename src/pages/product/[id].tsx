import { ShimmerProductDetails } from "@/components/ShimmerProductDetails";
import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
    defaultPrice: number;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  const { addItem } = useShoppingCart();

  if (isFallback) {
    return (
      <ProductContainer>
        <ShimmerProductDetails />
      </ProductContainer>
    );
  }

  function addProductToCart() {
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
        <title>Ignite Shop | {product.name}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button onClick={addProductToCart}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_QJowfJMaXmJkKM" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params ? params.id : "";

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
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
      },
    },
    revalidate: 60 * 60 * 1, //1 hour
  };
};
