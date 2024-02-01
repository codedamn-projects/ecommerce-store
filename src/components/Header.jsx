import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="shadow border-b py-3">
      <div className="max-w-7xl mx-auto px-2.5 md:px-7 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">Store</h1>
        </Link>

        <div className="relative" id="goToCart">
          <Link to="/cart">
            <ShoppingCart size={35} />
          </Link>

          <p className="total-item">0</p>
        </div>
      </div>
    </header>
  )
}

export default Header
