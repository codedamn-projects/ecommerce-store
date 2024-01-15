import { Star } from "lucide-react"
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  const { id, category, image, title, price, description, rating } = product

  return (
    <Link
      to={`/product/${id}`}
      className="grid gap-3 shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 max-w-sm mx-auto overflow-x-hidden p-5 rounded-lg"
    >
      <p className="w-fit italic font-medium text-gray-500">{category}</p>

      <img
        src={image}
        alt="product image"
        width={240}
        height={240}
        className="mx-auto w-72 h-60 object-contain"
      />

      <h3 className="truncate text-2xl font-semibold">{title}</h3>

      <div className="flex gap-3">
        <p>{Math.ceil(rating.rate)}</p>
        <div className="flex gap-1">
          {Array(Math.ceil(rating.rate))
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
        <p>| {rating.count} ratings</p>
      </div>

      <p className="line-clamp-3 text-gray-600">{description}</p>

      <p className="text-3xl font-bold">$ {price.toFixed(2)}</p>
    </Link>
  )
}
export default ProductCard
