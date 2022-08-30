import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1>About Page</h1>}/>
                    <Route path="users" element={<h1>User Page</h1>}/>
                    <Route path="/home" element={<h1>Home Page</h1>}/>
                    {/* con el replace se reemplaza el historial y ya no puede hacer back de pagina */}
                    <Route path="/*" element={<Navigate to="/home" replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}