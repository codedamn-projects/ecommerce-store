import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="shadow border-b py-3">
      <div className="max-w-7xl mx-auto px-2.5 md:px-7 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">Store</h1>
        </Link>

        <div className="relative">
          <Link to="/">
            <ShoppingCart size={35} />
          </Link>

          <p className="bg-black text-white font-medium w-5 h-5 rounded-full grid place-content-center absolute -right-2 -top-1">
            0
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
