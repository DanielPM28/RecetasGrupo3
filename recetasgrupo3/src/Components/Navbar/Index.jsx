import { NavLink } from 'react-router-dom'
import './App.css'

const NavBar = () => {
    const activeStile = 'underline underline-offset-4'

    return (
    <nav className='flex justify-between w-fill'>
        <ul className='flex items-center gap'>
            <li className='font-semibold'>
                <NavLink to = '/'>
                    My Page
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to = '/Recetas' className = {({isActive}) =>
                    isActive ? activeStile:undefined
                    }>
                        Recetas
                </NavLink>
            </li>

        </ul>


    </nav>
    )
}

export default NavBar;