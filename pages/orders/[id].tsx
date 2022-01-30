import { CashIcon, CheckCircleIcon, GiftIcon, HomeIcon, TruckIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { useRouter } from 'next/router'

const orderIndexRoute = ({order}:{order:any}) => {
  const status = order.status


  const router = useRouter()
  const{id} = router.query 
  return (
    <div className="px-12 pt-4">
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-4 grid grid-rows-2 gap-4">
          <div className="grid grid-cols-4">
            <div>
              <p className="font-medium">Order ID</p>
              <p className="truncate">{order._id}</p>
            </div>
            <div>
              <p className="font-medium">Customer</p>
              <p>{order.customer}</p>
            </div>
            <div>
              <p className="font-medium">Address</p>
              <p>{order.address}</p>
            </div>
            <div>
              <p className="font-medium">Total</p>
              <p>${order.total}</p>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div>
              <CashIcon className="h-14 w-14 text-green-700"/>
              <p>payment</p>
            </div>
            <div>
              <GiftIcon className="h-14 w-14 text-zinc-500" />
              <p>Prepering</p>
            </div>
            <div>
              <TruckIcon className="h-14 w-14 text-zinc-500" />
              <p>On the way</p>
            </div>
            <div>
              <HomeIcon className="h-14 w-14 text-zinc-500" />
              <p>Delivered</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-gray-800 text-white p-5 rounded-md">
            <p className="font-bold text-lg mb-4">CART TOTAL</p>
            <p><span className="font-medium">Sub Total : </span>${order.total}</p>
            <p><span className="font-medium">Discount : </span>$0.00</p>
            <p><span className="font-medium">Total : </span>${order.total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async({params}:any) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
  return {
    props: {
      order: res.data
    }
  }
}

export default orderIndexRoute