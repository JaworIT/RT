import type { NextApiRequest, NextApiResponse } from "next";
import tripsJSON from "@mockItem/trips.json";

export type TripType = {
  id: number;
  description: string;
  name: string;
  score: number;
  price: Price;
  image: string;
};

export type Price = {
  basePrice: number;
  promotionPrice?: number;
  currency: string;
};

type Error = {
  error: string;
};
//Here i added simple server, and error handling
export default async function tripsAPI(
  req: NextApiRequest,
  res: NextApiResponse<TripType[] | Error>
) {
  try {
    const data = await tripsJSON;
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "failed to load data" });
  }
}
