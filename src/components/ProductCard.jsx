import { Star } from "lucide-react"
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  const { id, category, image, title, price, description, rating } = product

  return (
    <Link to={`/product/${id}`} className="product-card">
      <p className="product-card__category">{category}</p>

      <img
        src={image}
        alt="product image"
        width={240}
        height={240}
        className="product-card__image"
      />

      <h3 className="product-card__title">{title}</h3>

      <div className="flex gap-3 font-medium">
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

      <p className="product-card__description">{description}</p>

      <p className="product-card__price">$ {price.toFixed(2)}</p>
    </Link>
  )
}
export default ProductCard
