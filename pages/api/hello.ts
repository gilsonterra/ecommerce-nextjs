// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
  linkedin: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({
      name: "Gilson Terra",
      email: "gilsonterra@gmail.com",
      linkedin: "https://www.linkedin.com/in/gilsonterra/",
    });
}
