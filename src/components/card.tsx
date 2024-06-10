import { Product } from '@/types'
import { Link } from 'react-router-dom'

export default function Card(product: Product) {
  return (
    <div className="w-40 rounded-md overflow-hidden shadow-md  hover:text-blue-700">
      <Link
        rel="stylesheet"
        className="flex flex-col"
        to={`/product/${product.id}`}
      >
        <img src={product.avatar} alt="imagem do produto" />
        <p className="text-xl">{product.name}</p>
        <p className="font-bold">R$ {product.price}</p>
      </Link>
    </div>
  )
}