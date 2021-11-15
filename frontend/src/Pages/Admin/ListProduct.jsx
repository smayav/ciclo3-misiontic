import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Form, Button, Container, Table} from 'react-bootstrap';
import Axios from 'axios';



const ListProduct = () => {

     const [barcode_add, set_barcode_add] = useState(0);
     const [description_add, set_description_add] = useState("");
     const [unit_cost_add, set_unit_cost_add] = useState(0);
     const [state_add, set_state_add] = useState("true");

     const [barcode_update, set_barcode_update] = useState(0);
     const [description_update, set_description_update] = useState("");
     const [unit_cost_update, set_unit_cost_update] = useState(0);
     const [state_update, set_state_update] = useState("true");
     const [id_update, set_id_update] = useState(0);

     const [products, set_products] = useState ([])

     useEffect(() => {
       Axios.get('http://localhost:8080/api/v1/product/list').then((res) =>{
           console.log(res.data.products);
           set_products(res.data.products);
       })
     }, [])
     
     const add_product_db = () =>{
         console.log (barcode_add + description_add + unit_cost_add)
         Axios.post('http://localhost:8080/api/v1/product/add', {
             barcode: barcode_add,
             description: description_add,
             unit_cost: unit_cost_add,
             state: state_add
         })
     }

     const delete_product = (_id) =>{
         Axios.delete ('http://localhost:8080/api/v1/product/delete/'+_id)
     }

     const update_product_db = (_id) =>{
        Axios.put('http://localhost:8080/api/v1/product/update', {
            _id: _id,
            barcode: barcode_update,
            description: description_update,
            unit_cost: unit_cost_update,
            state: state_update
        })
     }

     

    return (
        <div>
            <h1 className="bg-warning text-center">Listado de Productos</h1>
            <div className="col-sm">
                <Link to='/products' className="btn btn-danger" role="button" >Regresar</Link><br/>
            </div><br/>
            <div className="col-sm-3">
                <form className="d-flex">
                    <input className="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div><br/>
        
             <Container fluid>
             

             <Form>
                <Form.Group className="mb-3" controlId="formBasicBarcode">
                    <Form.Label>Id Producto</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el ID del producto" onChange= {(e) =>{
                        set_barcode_add(e.target.value);
                    }
                    } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la descripción del producto" onChange= {(e) =>{
                        set_description_add(e.target.value);
                    }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUnitCost">
                    <Form.Label>Valor unitario</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el costo unitario del producto" onChange= {(e) =>{
                        set_unit_cost_add(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUnitCost">
                    <Form.Check
                    inline
                    label="Disponible"
                    name="estado"
                    type="radio"
                    id="1"
                    onChange = {(e) => {
                        set_state_add("true");
                    }}
                    />

                <Form.Check
                    inline
                    label="Agotado"
                    name="estado"
                    type="radio"
                    id="0"
                    onChange = {(e) => {
                        set_state_add("false");
                        //e.target.value.toString()
                    }}
                    />
                </Form.Group>
                <Button variant="primary" onClick={add_product_db} >Agregar</Button>
            </Form>
                    <hr/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ID del producto</th>
                    <th>Descripción</th>
                    <th>Costo por unidad</th>
                    <th>Estado</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((value, key) =>
                            <tr>
                                <td>
                                    {key}
                                </td>
                                <td>
                                    {value.barcode}
                                </td>
                                <td>
                                    {value.description}
                                </td>
                                <td>
                                    {value.unit_cost}
                                </td>
                                <td>
                                    {value.state.toString()}
                                </td>
                                <td>
                                
                                <Button variant="primary" onClick={()=>{
                                    set_id_update(value._id);
                                    set_barcode_update(value.barcode);
                                    set_description_update (value.description);
                                    set_unit_cost_update (value.unit_cost);
                                    set_state_update (value.state.toString());
                        
                                    document.getElementById('barcode_update').defaultValue = value.barcode;
                                    document.getElementById('description_update').defaultValue = value.description;
                                    document.getElementById('unit_cost_update').defaultValue = value.unit_cost;
                                    
                                }} >Editar</Button>
                                </td>
                                <td>
                                <Button variant="danger" onClick={() => delete_product(value._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </Table>
                <Form>
                        <Form.Group className="mb-3" controlId="formBasicBarcode">
                            <Form.Label >Id Producto</Form.Label>
                            <Form.Control disabled = 'true' id ='barcode_update' type="number" placeholder="Ingrese el ID del producto" onChange= {(e) =>{
                                
                                set_barcode_update(e.target.value);
                            }
                            } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control id ='description_update' type="text" placeholder="Ingrese la descripción del producto" onChange= {(e) =>{
                                
                                set_description_update(e.target.value);
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicUnitCost">
                            <Form.Label>Valor unitario</Form.Label>
                            <Form.Control id ='unit_cost_update' type="number"  placeholder="Ingrese el costo unitario del producto" onChange= {(e) =>{
                                
                                set_unit_cost_update(e.target.value);
                            }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicState">
                            <Form.Check
                            inline
                            label="Disponible"
                            name="estado"
                            type="radio"
                            id="1"
                            onChange = {(e) => {
                                
                                set_state_update("true");
                            }}
                            />
                        <Form.Check
                            inline
                            label="Agotado"
                            name="estado"
                            type="radio"
                            id="0"
                            onChange = {(e) => {
                                
                                set_state_update("false");
                                //e.target.value.toString()
                            }}
                            />
                        </Form.Group>
                        <Button variant="warning" onClick={()=>{
                            update_product_db(id_update)
                        }
                            }>Actualizar</Button>
                    </Form>                 
            </Container>               
        </div>
    )
}
export default ListProduct;

