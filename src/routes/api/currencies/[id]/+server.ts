import prisma from "$lib/db/prisma";
import { json } from "@sveltejs/kit";

export async function PUT(event) {
  const body = await event.request.json();
  const currencyId = event.params.id;

  const currency = await prisma.currency.update({
    where: {
      id: currencyId,
    },
    data: {
      ...body,
      amount: String(body.amount),
    },
  });
  return json({
    status: "success",
    currency: currency,
  });
}
