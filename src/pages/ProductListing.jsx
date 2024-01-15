import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

const ProductListing = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
export default ProductListing
