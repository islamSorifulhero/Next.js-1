import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "bdt",
          product_data: {
            name: body.service,
          },
          unit_amount: body.total * 100,
        },
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/my-bookings",
    cancel_url: "http://localhost:3000",
  });

  return Response.json({ url: session.url });
}
