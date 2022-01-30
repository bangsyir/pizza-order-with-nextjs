import { useState } from "react"

export default function ModalOrderDetails({total, handlerCashStatus, createOrder}:{total:any, handlerCashStatus:any, createOrder:any}) {
  const [customer, setCustomer] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const handlerClick = () => {
    createOrder({customer, address, phone, total, method:0})
  }
  return (
    <div className="fixed z-10 inset-0 overflow-auto" aria-labelledby="modal-order-details" role="dialog" aria-modal="true">
      <div className="flex item-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
          <div className="inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-4 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  You will pay ${total} after delivery.
                </h3>
                <div className="mt-2">
                  <div className="flex flex-col">
                    <label className="text-gray-500">Name</label>
                    <input type="text" name="name" className="border border-gray-300 p-1 rounded-md w-100" onChange={(e) => setCustomer(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-500">Phone</label>
                    <input type="text" name="phone" className="border border-gray-300 p-1 rounded-md w-100" onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-500">Adress</label>
                    <input type="text" name="address" className="border border-gray-300 p-1 rounded-md w-100" onChange={(e) => setAddress(e.target.value)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handlerClick}>
              Submit
            </button>
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => handlerCashStatus(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}