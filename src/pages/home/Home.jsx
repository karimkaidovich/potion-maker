import './Home.scss'

import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const {data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes')
  return (
    <>
      <div>Home</div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </>
  )
}
