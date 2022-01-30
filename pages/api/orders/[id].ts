import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect"
import Order from "../../../models/Order"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method, query: {id}} = req 
  console.log(req)
  await dbConnect()
  if(method === "GET") {
    try {
      const order = await Order.findById(id)
      res.status(201).json(order)
    } catch (error) {
      res.status(500).json(500)
    }
  }
  if(method === "PUT") {}
  if(method === "DELETE") {}
}