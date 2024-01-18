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
        <article className="product-detail">
          <section>
            <img
              src={product.image}
              alt="product image"
              width={300}
              height={300}
              className="product-detail__image"
            />
          </section>
          <section className="space-y-5">
            <h2 className="product-detail__title">{product.title}</h2>

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

            <p className="product-detail__description">{product.description}</p>
            <p className="product-detail__price">
              $ {product.price.toFixed(2)}
            </p>
            <button className="product-detail__addToCart">
              <ShoppingCart size={25} />
              <p>Add to Cart</p>
            </button>
          </section>
        </article>
      ) : (
        <div className="text-5xl font-bold">Loading...</div>
      )}
    </>
  )
}
export default ProductDetail
