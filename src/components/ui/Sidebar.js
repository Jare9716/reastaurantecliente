import React from "react";
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return(
        <>
            <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
                <div className="p-6">
                    <p className='uppercase text-white text-2xl tracking-wide text-center font-bold '>RestaurantApp</p>

                    <p className="mt-3 text-gray-600">Administrar tu restaurante en las siguientes opciones:</p>

                    <nav className="mt-10">
                        <NavLink  //La función isActive es usada para el cambio del color en el boton cuando se encuntra en el path correspondiente el NavLink
                                className= {
                                    ({ isActive }) => isActive 
                                    ? 'p-1 text-yellow-500 block hover:bg-yellow-500 hover:text-gray-900' 
                                    : 'p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900'
                                }
                                end to="/"
                            >Ordenes
                        </NavLink>

                        <NavLink 
                                className= {
                                    ({ isActive }) => isActive 
                                    ? 'p-1 text-yellow-500 block hover:bg-yellow-500 hover:text-gray-900' 
                                    : 'p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900'
                                }    
                                end to="/menu"
                            >Menú
                        </NavLink>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar

