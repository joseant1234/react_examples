import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { FormikBasicPage } from '../forms/pages/FormikBasicPage';
import { RegisterPage } from '../forms/pages/RegisterPage';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="register" element={<RegisterPage />}></Route>
                    <Route path="formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="users" element={ <h1>Users Page</h1> } />
                    <Route path="home" element={ <h1>Home Page</h1> } />

                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
