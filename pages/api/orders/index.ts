import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect"
import Order from "../../../models/Order"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method, query: {id}} = req 
  dbConnect()
  if(method === "GET") {
    try {
      const order = await Order.find()
      res.status(200).json(order)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  if(method === "POST") {
    try {
      const order = await Order.create(req.body)
      res.status(201).json(order)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}