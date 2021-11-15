import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div><h1 className="bg-warning text-center">Sistema de gestión - Estilo Delta</h1>
                <div className="container ">
                
        
                <div className="card bg-light">
                    <img src={process.env.PUBLIC_URL + '/img/inventario.png'} className="card-img-top p-2" alt="usuarios"/>
                    <h5 className="card-title p-1">Gestión de Productos</h5>
                    <p className="card-text">En este modulo puedes ingresar, listar, buscar y actualizar las ventas</p>
                    <Link to='/products'>Ingresar</Link>
                </div>
                <div className="card bg-light">
                    <img src={process.env.PUBLIC_URL + '/img/vendedor.png'} className="card-img-top p-2" alt="usuarios"/>
                    <h5 className="card-title p-1">Gestión de Ventas</h5>
                    <p className="card-text">En este modulo puedes ingresar, listar, buscar y actualizar las ventas</p>
                    <Link to='/vending'>Ingresar</Link>
                </div>
                
                <div className="card bg-light">
                    <img src={process.env.PUBLIC_URL + '/img/usuarios.png'} className="card-img-top p-2" alt="usuarios"/>
                    <h5 className="card-title p-1">Gestión de Usuarios</h5>
                    <p className="card-text">En este modulo puedes ingresar, listar, buscar y actualizar las ventas</p>
                    <Link to='/admin'>Ingresar</Link>
                </div>
        
            </div></div>
    )
}

export default Home
