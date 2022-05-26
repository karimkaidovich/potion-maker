import './RecipeList.scss'
import { Link } from 'react-router-dom'

export default function RecipeList({ recipes }) {
  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div key={recipe.id} className='card'>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.description.substring(0, 20)}...</div>
          <Link to={`recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}
