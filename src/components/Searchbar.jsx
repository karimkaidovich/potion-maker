import { useNavigate } from 'react-router-dom'
import './Searchbar.scss'
import { useState } from 'react'

export default function Searchbar() {
  const [term, setTerm] = useState('')
  const navigation = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigation(`/search?q=${term}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input 
          type="text"
          id="search"
          onChange={e => setTerm(e.target.value)}
          required
       />
      </form>
    </div>
  )
}
