import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Search.scss'


export default function Search() {
 const [searchParams, setSearchParams] = useSearchParams()
 const query = searchParams.get('q')
 const url = 'http://localhost:3000/recipes?q=' + query

 const {data: recipes, isPanding, error} = useFetch(url)
  return (
    <div className='recipe-list'>
    {recipes && recipes.map(recipe => (
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
