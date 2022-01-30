import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import {useRouter} from "next/router"
import axios from "axios";
import { reset } from "../redux/cartSlice";
import ModalOrderDetails from "../components/ModalOrderDetails";

export default function Cart () {
  const cart = useSelector((state:any) => state.cart)
  const [open,setOpen] = useState(false)
  const [cash,setCash] = useState(false)

  const amount = cart.total;
  const currency = "USD";

  const dispatch = useDispatch()
  const router = useRouter()

  const handlerCashStatus = (data:boolean) => {
    setCash(data)
  }
  
  const createOrder = async(data:any) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data)
      res.status === 201 && router.push('/orders/'+res.data._id)
      dispatch(reset())
    } catch (error) {
      console.log(error)
    }
  }
  const modalProps = {
    handlerCashStatus : handlerCashStatus,
    total: cart.total,
    createOrder: createOrder
  }


  return (
    <div className="px-4 md:px-8 lg:px-12 pt-6">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8 md:col-span-6 overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gray-100 text-gray-500">
              <tr>
                <th className="p-2">Product</th>
                <th className="p-2">Name</th>
                <th className="p-2">Extras</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product:any) => {
                return (
                  <tr className="text-center" key={product._id}>
                    <td>
                      <Image src={product.img} width={100} height={100} />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.extras.map((extra:any) => (
                        <span key={extra._id}>{extra.text}</span>
                      ))}</td>
                    <td>${product.price}.00</td>
                    <td>{product.quantity}</td>
                    <td>${product.price * product.quantity}.00</td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
        <div className="col-span-8 sm:pt-4 md:pt-0 md:col-span-2">
          <div className="bg-gray-700 p-4 text-white rounded-md ">
            <p className="text-lg font-semibold">CART TOTAL</p>
            <div className="pt-2">
              <p><span className="font-semibold">Subtotal : </span> ${cart.total}.00</p>
              <p><span className="font-semibold">Discount : </span> $00.00</p>
              <p><span className="font-semibold">Total : </span> ${cart.total}.00</p>
            </div>
            <div className="pt-2">
              {open ? (
                <div>
                  <div className="mb-4">
                    <button className="bg-white uppercase text-orange-600 px-3 py-2 rounded-md font-semibold w-full" onClick={() => cash === false ? setCash(true) : setCash(false)}>Cash On Delivery</button>
                  </div>
                </div>
              ):(
                <button className="bg-white uppercase text-orange-600 px-3 py-2 rounded-md font-semibold w-full" onClick={() => setOpen(true)}>Checkout now</button>
              )}
            </div>
          </div>
        </div>
      </div>
      {cash === true ? (
        <ModalOrderDetails {...modalProps} />
      ): null}
    </div>
  )
}