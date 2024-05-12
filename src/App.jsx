import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import RecipePage from './components/RecipePage'
import HomePage from './components/HomePage'
import { Routes, Route, useMatch } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getRecipies = async () => {
      setLoading(true)
      const res = await axios.get('https://dummyjson.com/recipes')
      setRecipes(res.data.recipes)
      setLoading(false)
      console.log(res.data.recipes)
    }  
    getRecipies()
  }, [])

  const MyContext = createContext(); 

  const match = useMatch('/recipes/:id')
  const recipe = match 
    ? recipes.find(recipe => recipe.id === Number(match.params.id))
    : null

  return ( 
    <MyContext.Provider value={currentPage}>
       <Routes>
        <Route path="/" element={<HomePage recipes={recipes} loading={loading}
        currentPage={currentPage} setCurrentPage={setCurrentPage}></HomePage>}></Route>
        <Route path="recipes/:id" element={<RecipePage recipe={recipe}></RecipePage>}></Route>
      </Routes>  
    </MyContext.Provider>       
  );
}

export default App;
