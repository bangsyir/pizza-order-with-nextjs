import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect"
import Product from "../../../models/Products"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  dbConnect()
  const {method} = req
  const {id} = req.query
  const product = await Product.findById(id)

  if(method === "GET") {
    try {
      return res.status(201).json(product)
    } catch (error) {
      res.status(500).json({
        message: "Opps something wrong",
        statusCode: 500,
        error: error
      })
    }
  }
  if(method === "PUT"){}
  if(method === "DELETE"){}
}