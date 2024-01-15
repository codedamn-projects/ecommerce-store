import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Layout from "./pages/Layout"
import ProductDetail from "./pages/ProductDetail"
import ProductListing from "./pages/ProductListing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductListing />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
