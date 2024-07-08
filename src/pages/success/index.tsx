import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}
export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart();
  useEffect(() => {
    clearCart();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Ignite Shop | Compra efetuada</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <div className="productList">
          {products.map((product) => (
            <ImageContainer key={product.name}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </div>

        {products.length === 1 ? (
          <p>
            Uhuul <strong>{customerName}</strong>, sua{" "}
            <strong>{products[0].name}</strong> já está a caminho da sua casa.
          </p>
        ) : (
          <p>
            Uhuul <strong>{customerName}</strong>, sua compra de{" "}
            {products.length} camisetas já está a caminho da sua casa.
          </p>
        )}

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  // percorrer o array e salvar as imagens em um novo array
  // const imageProducts = session.line_items.data.map((item) => {
  //   const product = item.price.product as Stripe.Product;
  //   return product.images[0];
  // })

  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;
    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  // console.log(`products: `, products)

  // const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      products,
    },
  };
};
