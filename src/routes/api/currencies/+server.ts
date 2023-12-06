import { getCMCCurrencyDetail } from "$lib/api/cmc-currency-detail";
import prisma from "$lib/db/prisma";
import { changeImageType } from "$lib/utils/image";
import { Prisma } from "@prisma/client";
import { error, json } from "@sveltejs/kit";

export async function GET(event) {
  if (!event.locals.session) {
    return json(
      {
        status: "error",
        message: "Not logged in",
      },
      {
        status: 401,
      }
    );
  }

  const currencies = await prisma.currency.findMany({
    where: {
      userId: event.locals.session.userId,
    },
  });

  return json({
    status: "success",
    currencies: currencies,
  });
}

export async function POST(event) {
  try {
    if (!event.locals.session) {
      return json(
        {
          status: "error",
          message: "Not logged in",
        },
        {
          status: 401,
        }
      );
    }

    const body = await event.request.json();
    let slug = body.coinGeckoId;
    console.log('slug here           ', slug)

    const currencyByCoinGeckoId = await getCMCCurrencyDetail(slug);

    if (!currencyByCoinGeckoId.data) {
      slug = body.symbol;
      const currencyBySymbol = await getCMCCurrencyDetail(slug);
      if (!currencyBySymbol.data) {
        throw error(409, {
          message: "Currency not found on CoinMarketCap!",
        });
      }
    }

    const currency = await prisma.currency.create({
      data: {
        slug: slug,
        name: body.name,
        symbol: body.symbol,
        url: changeImageType(body.url),
        amount: String(body.amount),
        userId: event.locals.session.userId,
      },
    });

    return json({
      status: "success",
      currency: currency,
    });
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      throw error(409, {
        message: "Currency already exist!",
      });
    }
  }
}
