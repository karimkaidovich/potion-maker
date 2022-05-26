import './Recipe.scss'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {data: recipe, isPanding, error} = useFetch(url)
  return (
    <div className='recipe'>
      {error && <p>{error}</p>}
      {isPanding && <p>Loading...</p>}
      {recipe && (
        <>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <p>Recipe:</p>
          <ul>{recipe.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}</ul>
          <p>{recipe.cookingTime} to make</p>
        </>
      )}
    </div>
  )
}
