import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";
import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : '' }>LazyPage1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : '' }>LazyPage2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : '' }>LazyPage3</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="lazy1" element={<LazyPage1 />}/>
                    <Route path="lazy2" element={<LazyPage2 />}/>
                    <Route path="lazy3" element={<LazyPage3 />}/>
                    {/* con el replace se reemplaza el historial y ya no puede hacer back de pagina */}
                    <Route path="/*" element={<Navigate to="lazy1" replace/>}/>
                </Routes>
                {/* <Routes> */}
                    {/* <Route path="about" element={<h1>About Page</h1>}/> */}
                    {/* <Route path="users" element={<h1>User Page</h1>}/> */}
                    {/* <Route path="/home" element={<h1>Home Page</h1>}/> */}
                    {/* con el replace se reemplaza el historial y ya no puede hacer back de pagina */}
                    {/* <Route path="/*" element={<Navigate to="/home" replace/>}/> */}
                {/* </Routes>  */}
            </div>
        </BrowserRouter>
    )
}
