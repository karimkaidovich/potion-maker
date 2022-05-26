import { Link } from 'react-router-dom'

import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>Potion Maker</h1>
        </Link>
        <Link to='/create'>create recipe</Link>
      </nav>
    </div>
  )
}
