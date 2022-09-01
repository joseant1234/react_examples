import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../logo.svg';
import { routes } from './routes';

// con el suspense sirve para decirle al react q cuando se esta cargando un componente, módulo que espere, mientras este cargando que haga una accion como reendirzar un componente (en fallback)
// si está el fallback en null no reenderizará ningun componente
export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={to}>
                                        <NavLink
                                            to={to}
                                            className={({ isActive }) => isActive ? 'nav-active' : '' }>
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({path, Component}) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component />}
                                />
                            ))
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
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
        </Suspense>

    )
}
