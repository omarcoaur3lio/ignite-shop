import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { priceId } = request.body;

  if (request.method !== "POST") {
    response.status(405).json({
      error: "Method not allowed.",
    });
  }

  if (!priceId) {
    response.status(400).json({
      error: "Price not found.",
    });
  }

  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return response.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
