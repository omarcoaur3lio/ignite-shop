import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { items } = request.body;

  if (request.method !== "POST") {
    response.status(405).json({
      error: "Method not allowed.",
    });
  }

  if (!items) {
    response.status(400).json({
      error: "Price not found.",
    });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const arrayOfProducts = Object.keys(items).map((key) => items[key])
  const pricesId = arrayOfProducts.map((item) => item.price_id)

  const lineItems = pricesId.map((priceId) => {
    return {
      price: priceId,
      quantity: 1,
    }
  })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems,
  })

  return response.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
