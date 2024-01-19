import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import useStore from "../context/store"

const Header = () => {
  const { cartItems } = useStore()

  return (
    <header className="shadow border-b py-3">
      <div className="max-w-7xl mx-auto px-2.5 md:px-7 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">Store</h1>
        </Link>

        <Link to="/cart" className="relative" id="goToCart">
          <ShoppingCart size={35} />

          <p className="total-item">{cartItems.length}</p>
        </Link>
      </div>
    </header>
  )
}

export default Header
