import { createContext, useContext, useState } from "react"

const Store = createContext()

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  return (
    <Store.Provider value={{ cartItems, setCartItems }}>
      {children}
    </Store.Provider>
  )
}

export default function useStore() {
  return useContext(Store)
}
