import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StoreProvider } from "./context/store"
import Cart from "./pages/Cart"
import Layout from "./pages/Layout"
import ProductDetail from "./pages/ProductDetail"
import ProductListing from "./pages/ProductListing"

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductListing />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
