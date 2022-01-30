import { useRouter } from "next/router"
import Image from "next/image"
import Head from "next/head"
import { useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";



const ItemRoute = ({item}:any) => {
  const [price, setPrice] = useState(item.prices[0])
  const [size, setSize] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [extras, setExtras]:any[] = useState([])
  const dispatch = useDispatch()
  
  const changePrice = (number:number) => {
    setPrice(price + number)
  }
  const handleSize = (sizeIndex:number) => {
    const difference = item.prices[sizeIndex] - item.prices[size]
    setSize(sizeIndex)
    changePrice(difference)
  }
  const handleOption = (e:any, option:any) => {
    const checked = e.target.checked
    if(checked) {
      changePrice(option.price)
      setExtras((prev: any) => [...prev,option])
    }else {
      changePrice(-option.price)
      setExtras(extras.filter((extra:any) => extra._id !== option._id))
    }
  }
  // console.log(extras)
  const handleQuantity = (e:any) => {
    const quantity = parseInt(e.target.value)
    setQuantity(quantity)
  }

  const handleCart = () => {
    dispatch(addProduct({...item, extras, price, quantity}))
  }
  const router = useRouter()
  const {id }= router.query

  return (
    <div className="px-12">
      <Head>
        <title>{item.title}</title>
      </Head>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <Image src="/img/pizza.png" width={500} height={500}/>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-4xl">{item.title}</h3>
          <h4 className="font-bold text-orange-500 text-2xl">Rm{price}.00</h4>
          <p>{item.desc}</p>
          <p className="font-bold text-l pt-4">Choose the size</p>
          <div className="flex gap-4 mt-1">
            <div className="mt-auto text-center" onClick={() => handleSize(0)}>
              <Image src="/img/pizza.png" width={35} height={35} /><br />
              <span className={size === 0 ? 'text-orange-700 font-bold' : ''}>Small</span>
            </div>
            <div className="mt-auto text-center" onClick={() => handleSize(1)}>
              <Image src="/img/pizza.png" width={40} height={40} /><br />
              <span className={size === 1 ? 'text-orange-700 font-bold' : ''}>Medium</span>
            </div>
            <div className="mt-auto text-center" onClick={() => handleSize(2)}>
              <Image src="/img/pizza.png" width={45} height={45} /><br />
              <span className={size === 2 ? 'text-orange-700 font-bold' : ''}>Large</span>
            </div>
          </div>
          <p className="font-bold text-l pt-4">Choose additional ingradient</p>
          {item.extraOption.map((option:any)=> {
            return (
              <div key={option._id}>
                <input type="checkbox" id={option.text} name={option.text} onChange={(e)=>handleOption(e, option)}/>
                <label className="ml-1">{option.text}</label>
              </div>
            )
          })}
          <div className="py-3 grid grid-rows-1 gap-2">
            <span className="font-bold">Quantity</span>
            <input type="number" className="border border-gray-500 px-2 py-1 rounded-md outline-none w-1/6" defaultValue={quantity} onClick={handleQuantity}/>
          </div>
          <button className="bg-orange-500 p-2 text-white rounded-md" onClick={handleCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemRoute

export const getServerSideProps = async({query}:any) => {
  const {id} = query
  const res = await axios.get(`http://localhost:3000/api/products/${id}`)
  return {
    props: {
      item: res.data
    }
  }
}