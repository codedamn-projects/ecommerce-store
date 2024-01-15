import { ShoppingCart, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id])

  return (
    <>
      {product ? (
        <article className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center justify-center justify-items-center">
          <section>
            <img
              src={product.image}
              alt="product image"
              width={300}
              height={300}
            />
          </section>
          <section className="space-y-5">
            <h2 className="text-4xl font-semibold">{product.title}</h2>

            <div className="flex gap-3 font-medium">
              <p>{Math.ceil(product.rating.rate)}</p>
              <div className="flex gap-1">
                {Array(Math.ceil(product.rating.rate))
                  .fill(1)
                  .map((_, index) => (
                    <Star
                      size={25}
                      key={index}
                      stroke=""
                      className="fill-yellow-500"
                    />
                  ))}
              </div>
              <p>| {product.rating.count} ratings</p>
            </div>

            <p>{product.description}</p>
            <p className="text-4xl font-bold">$ {product.price.toFixed(2)}</p>
            <div>
              <button className="flex gap-3 w-full justify-center bg-black text-white py-2 rounded-lg">
                <ShoppingCart size={25} />
                <p>Add to Cart</p>
              </button>
            </div>
          </section>
        </article>
      ) : (
        <div className="text-5xl font-bold">Loading...</div>
      )}
    </>
  )
}
export default ProductDetail
