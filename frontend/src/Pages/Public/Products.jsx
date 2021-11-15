import React from 'react';
import { Link } from 'react-router-dom';


function Products() {
    return (
        <div>

            <h1 className="bg-warning text-center">Productos</h1>
            <div className="container ">
                <div className="card bg-light">
                    <img src={process.env.PUBLIC_URL + '/img/inventario.png'} className="card-img-top p-2" alt="usuarios"/>
                    <h5 className="card-title p-1">Gestión de Productos</h5>
                    <p className="card-text">En este modulo puedes ingresar, listar, buscar y actualizar productos</p>
                    <Link to='/listproducts'> Ingresar</Link>
                </div>

            </div>
        </div>
    )
}

export default Products;
