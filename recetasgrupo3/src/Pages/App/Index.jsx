import { useRoutes , BrowserRouter } from 'react-router-dom';
import Home from '../Home/Index'
import NavBar from '../../Components/Navbar/Index'
import RecipeCarousel from "../Recetas/Index";
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    
    { path: '/Recetas', element: <RecipeCarousel /> },
    { path:'/', element:<Home />},
  ])
  return routes
}

const App = () => {

  return (
    <>
    <BrowserRouter>
    <NavBar />
      <AppRoutes />
      
    </BrowserRouter>
    <div className="h-40 w-40 rounded-full my-auto mx-auto items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Carrusel de Recetas</h1>
        <RecipeCarousel />
      </div>
    </>
    
    
  )
}
export default App