import { Link } from 'react-router-dom'
import SearchBar from './searchBar'

export default function Header() {
  return (
    <header className="container flex justify-between">
      <h1 className="text-2xl font-bold">
        <Link to={'/'}>VNW</Link>
      </h1>
      <SearchBar />
      <div>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/cart'}>Carrinho</Link>
      </div>
    </header>
  )
}