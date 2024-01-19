import { ShoppingCart, Star } from "lucide-react"
import useStore from "../context/store"

const CartProduct = ({ product }) => {
  const { id, description, image, rating, title, price } = product

  const { setCartItems } = useStore()

  const removeFromCart = () => {
    setCartItems((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="cart-product">
      <img src={image} alt="product image" width={200} height={200} />

      <div className="lg:col-span-3 space-y-2">
        <h3 className="cart-product__title">{title}</h3>

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

        <p className="cart-product__description">{description}</p>

        <p className="cart-product__price">$ {price.toFixed(2)}</p>
      </div>

      <button className="cart-product__removeFromCart" onClick={removeFromCart}>
        <ShoppingCart className="mr-2" />
        <p>Remove from Cart</p>
      </button>
    </div>
  )
}
export default CartProduct
