import CartProduct from "../components/CartProduct"
import useStore from "../context/store"

const Cart = () => {
  const { cartItems } = useStore()
  const totalPrice = cartItems.reduce(
    (accu, product) => accu + product.price,
    0
  )

  return (
    <div className="max-w-7xl mx-auto p-2.5 md:px-7 py-10">
      <h2 className="text-4xl border-b pb-5">
        {cartItems.length > 0 ? "Your Shopping Cart" : "Your Cart is Empty!"}
      </h2>

      {cartItems.length > 0 && (
        <>
          <div className="space-y-16 py-10">
            {cartItems.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-4 text-center justify-between pt-5">
            <h4 className="text-3xl">
              Subtotal ({cartItems.length} items):{" "}
              <span className="font-medium">$ {totalPrice.toFixed(2)}</span>
            </h4>
            <button className="py-2.5 bg-green-500 transition duration-200 hover:bg-opacity-85 text-white px-5 font-medium rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
