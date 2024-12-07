// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './features/cart/cartSlice.js'
// import booksApi from './features/books/booksApi.js'
// import ordersApi from './features/orders/ordersApi.js'


// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     [booksApi.reducerPath]: booksApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
// })

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import booksApi from './features/books/booksApi'
import ordersApi from './features/orders/ordersApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})