import './Create.scss'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

export default function Create() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingridientsInput = useRef(null)
  const navigate = useNavigate()
  const { postData , error, data } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = ingredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setIngredient('')
    ingridientsInput.current.focus()
  }

  const handleDelete = (ingredient) => {
    setIngredients(prevIngredients => prevIngredients.filter(ing => ing !== ingredient))
    ingridientsInput.current.focus()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title, description, cookingTime: cookingTime + ' minutes', ingredients})
  }

  useEffect(() => {
    data && navigate('/')
  }, [data])



  return (
    <div className='create'>
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Description:</span>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Ingredients:</span>
          <input 
            value={ingredient}
            onChange={e => setIngredient(e.target.value)}
            type="text"
            ref={ingridientsInput}
          />
          <button onClick={handleAdd}>add</button>
        </label>
        <ul>{ingredients && ingredients.map(ingredient => (
              <li key={ingredient}>
                <p>{ingredient}</p>
                <button onClick={() => handleDelete(ingredient)}>X</button>
              </li>
          ))}</ul>
        <label>
          <span>Cooking time (minutes):</span>
          <input 
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
