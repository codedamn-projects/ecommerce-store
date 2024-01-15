import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => (
  <footer className="py-5 border-t">
    <div className="max-w-7xl mx-auto px-2.5 md:px-7 flex justify-between items-center">
      <p className="text-lg font-medium">
        &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
      </p>

      <div className="flex gap-3">
        <Link to="/" className="bg-black p-2 rounded-lg">
          <Instagram size={25} color="white" />
        </Link>
        <Link to="/" className="bg-black p-2 rounded-lg">
          <Facebook size={25} color="white" />
        </Link>
        <Link to="/" className="bg-black p-2 rounded-lg">
          <Twitter size={25} color="white" />
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
