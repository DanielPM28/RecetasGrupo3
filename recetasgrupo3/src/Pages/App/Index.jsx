import { useRoutes , BrowserRouter } from 'react-router-dom';
import Home from '../Home/Index'
import Recetas from '../Recetas/Index'
import NavBar from '../../Components/Navbar/Index'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Recetas', element: <Recetas /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  )
}
export default App