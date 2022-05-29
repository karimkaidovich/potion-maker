import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>Potion Maker</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>create recipe</Link>
      </nav>
    </div>
  )
}
