import {createSlice} from "@reduxjs/toolkit"

interface CartState {
  products?: [],
  quantity?: number
  total?: number
}

const initialState = {
  products: [],
  quantity: 0,
  total: 0
} as CartState

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    addProduct: (state: any, action: any) => {
      state.products.push(action.payload)
      state.quantity += 1
      state.total += action.payload.price * action.payload.quantity
    },
    reset: (state: any) => {
      state.products = []
      state.quantity = 0
      state.total = 0
    }
  }
})

export const {addProduct, reset} = cartSlice.actions
export default cartSlice.reducer