import React from 'react'
import { Link } from 'react-router-dom';


function Admin() {
    return (
        <div>

            <h1 className="bg-warning text-center">Administración de Usuarios/Roles</h1>

            
                    <div className="container ">
                        <div className="card bg-light">
                        <img src={process.env.PUBLIC_URL + '/img/usuarios.png'} className="card-img-top p-2" alt="usuarios"/>
                            <h5 className="card-title p-1">Usuarios y Roles</h5>
                                <p className="card-text">En este modulo puedes consultar y gestionar los usuarios y roles</p>
                                <Link  to="/user">Ingresar</Link>
                        </div>

                        
                    </div>
        </div>
    )
}

export default Admin;
