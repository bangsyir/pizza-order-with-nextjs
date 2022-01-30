import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect"
import Product from "../../../models/Products"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req 
  dbConnect()
  if(method === "GET") {
    try{
      const products = await Product.find().select("title prices desc")
      res.status(200).json(products)
    }catch(err) {
      res.status(500).json(err)
    }
  }
  if(method === "POST"){
    try {
      const product = await Product.create(req.body)
      res.status(201).json(product)
    }catch(err){
      res.status(500).json(err)
    }
  }
}