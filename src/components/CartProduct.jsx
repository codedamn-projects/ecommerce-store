import { ShoppingCart, Star } from "lucide-react"
import useStore from "../context/store"

const CartProduct = ({ product }) => {
  const { id, description, image, rating, title, price } = product

  const { setCartItems } = useStore()

  const removeFromCart = () => {
    setCartItems((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="max-w-7xl mx-auto p-2.5 md:px-7 grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
      <img src={image} alt="product image" width={200} height={200} />

      <div className="lg:col-span-3 space-y-2">
        <h3 className="text-3xl font-semibold truncate">{title}</h3>

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

        <p className="line-clamp-3">{description}</p>

        <p className="text-3xl font-bold">$ {price.toFixed(2)}</p>
      </div>

      <button
        className="flex items-center py-2.5 bg-red-500 transition duration-200 hover:bg-opacity-85  text-white justify-center rounded-lg"
        onClick={removeFromCart}
      >
        <ShoppingCart className="mr-2" />
        <p>Remove from Cart</p>
      </button>
    </div>
  )
}
export default CartProduct
