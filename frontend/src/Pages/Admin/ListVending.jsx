import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Form, Button, Container, Table} from 'react-bootstrap';
import Axios from 'axios';



const ListVending = () => {

     const [barcode_add, set_barcode_add] = useState(0);
     const [total_cost_add, set_total_cost_add] = useState(0);
     const [cant_add, set_cant_add] = useState(0);
     const [unit_cost_add, set_unit_cost_add] = useState(0);
     const [date_add, set_date_add] = useState("");
     const [id_client_add, set_id_client_add] = useState(0);
     const [name_client_add, set_name_client_add] = useState("");
     const [seller_add, set_seller_add] = useState("");
     const [state_add, set_state_add] = useState("");

     const [barcode_update, set_barcode_update] = useState(0);
     const [total_cost_update, set_total_cost_update] = useState(0);
     const [cant_update, set_cant_update] = useState(0);
     const [unit_cost_update, set_unit_cost_update] = useState(0);
     const [date_update, set_date_update] = useState("");
     const [id_client_update, set_id_client_update] = useState(0);
     const [name_client_update, set_name_client_update] = useState("");
     const [seller_update, set_seller_update] = useState("");
     const [state_update, set_state_update] = useState("");
     const [id_update, set_id_update] = useState(0);

     const [vending, set_vending] = useState ([])

     useEffect(() => {
       Axios.get('http://localhost:8080/api/v1/vending/list').then((res) =>{
           console.log(res.data.vending);
           set_vending(res.data.vending);
       })
     }, [])
     
     const add_vending_db = () =>{
         
         Axios.post('http://localhost:8080/api/v1/vending/add', {
             barcode: barcode_add,
             total_cost: total_cost_add,
             cant: cant_add,
             unit_cost: unit_cost_add,
             date: date_add,
             id_client: id_client_add,
             name_client: name_client_add,
             seller: seller_add,
             state: state_add
         })
     }

     const delete_vending = (_id) =>{
         Axios.delete ('http://localhost:8080/api/v1/vending/delete/'+_id)
     }

     const update_vending_db = (_id) =>{
        Axios.put('http://localhost:8080/api/v1/vending/update', {
            _id: _id,
            barcode: barcode_update,
             total_cost: total_cost_update,
             cant: cant_update,
             unit_cost: unit_cost_update,
             date: date_update,
             id_client: id_client_update,
             name_client: name_client_update,
             seller: seller_update,
             state: state_update
        })
     }

     

    return (
        <div>
            <h1 className="bg-warning text-center">Listado de Ventas</h1>
            <div className="col-sm">
                <Link to='/vending' className="btn btn-danger" role="button" >Regresar</Link><br/>
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
                    <Form.Label>Id Venta</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el ID de la venta" onChange= {(e) =>{
                        set_barcode_add(e.target.value);
                    }
                    } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTotalCost">
                    <Form.Label>Costo Total</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el costo total de la venta" onChange= {(e) =>{
                        set_total_cost_add(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCant">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese la cantidad de productos" onChange= {(e) =>{
                        set_cant_add(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUnitCost">
                    <Form.Label>Costo Unitario</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el costo unitario del producto" onChange= {(e) =>{
                        set_unit_cost_add(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" placeholder="Ingrese la fecha de venta" onChange= {(e) =>{
                        set_date_add(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicIdClient">
                    <Form.Label>ID cliente</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el Id del cliente" onChange= {(e) =>{
                        set_id_client_add(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNameClient">
                    <Form.Label>Nombre cliente</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el Nombre del cliente" onChange= {(e) =>{
                        set_name_client_add(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSeller">
                    <Form.Label>Nombre vendedor</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el Nombre del vendedor" onChange= {(e) =>{
                        set_seller_add(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicState">
                            <Form.Check
                            inline
                            label="En proceso"
                            name="estado"
                            type="radio"
                            id="En proceso"
                            onChange = {(e) => {
                                
                                set_state_add("En proceso");
                            }}
                            />
                        <Form.Check
                            inline
                            label="Cancelada"
                            name="estado"
                            type="radio"
                            id="Cancelada"
                            onChange = {(e) => {
                                
                                set_state_add("Cancelada");
                                //e.target.value.toString()
                            }}
                            />

                        <Form.Check
                            inline
                            label="Entregada"
                            name="estado"
                            type="radio"
                            id="Entregada"
                            onChange = {(e) => {
                                
                                set_state_add("Entregada");
                                //e.target.value.toString()
                            }}
                            />
                        </Form.Group>
                    <br/>
                    
              
                <Button variant="primary" onClick={add_vending_db} >Agregar</Button>
            </Form>
                    <hr/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ID venta</th>
                    <th>Costo Total</th>
                    <th>Cantidad</th>
                    <th>Costo Unidad</th>
                    <th>Fecha</th>
                    <th>ID cliente</th>
                    <th>Nombre Cliente</th>
                    <th>Vendedor</th>
                    <th>Estado</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vending.map((value, key) =>
                            <tr>
                                <td>
                                    {key}
                                </td>
                                <td>
                                    {value.barcode}
                                </td>
                                <td>
                                    {value.total_cost}
                                </td>
                                <td>
                                    {value.cant}
                                </td>
                                <td>
                                    {value.unit_cost}
                                </td>
                                <td>
                                    {value.date}
                                </td>
                                <td>
                                    {value.id_client}
                                </td>
                                <td>
                                    {value.name_client}
                                </td>
                                <td>
                                    {value.seller}
                                </td>
                                <td>
                                    {value.state.toString()}
                                </td>
                                <td>
                                
                                <Button variant="primary" onClick={()=>{
                                    set_id_update(value._id);
                                    set_barcode_update(value.barcode);
                                    set_total_cost_update (value.total_cost);
                                    set_cant_update (value.cant);
                                    set_unit_cost_update (value.unit_cost);
                                    set_date_update (value.date);
                                    set_id_client_update (value.id_client);
                                    set_name_client_update (value.name_client);
                                    set_seller_update (value.seller);
                                    
                        
                                    document.getElementById('barcode_update').defaultValue = value.barcode;
                                    document.getElementById('total_cost_update').defaultValue = value.total_cost;
                                    document.getElementById('cant_update').defaultValue = value.cant;
                                    document.getElementById('unit_cost_update').defaultValue = value.unit_cost;
                                    document.getElementById('date_update').defaultValue = value.date;
                                    document.getElementById('id_client_update').defaultValue = value.id_client;
                                    document.getElementById('name_client_update').defaultValue = value.name_client;
                                    document.getElementById('seller_update').defaultValue = value.seller;
                                    
                                    
                                }} >Editar</Button>
                                </td>
                                <td>
                                <Button variant="danger" onClick={() => delete_vending(value._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </Table>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicBarcode">
                        <Form.Label>Id Venta</Form.Label>
                        <Form.Control disabled = 'true' id='barcode_update' type="number" placeholder="Ingrese el ID de la venta" onChange= {(e) =>{
                            set_barcode_update(e.target.value);
                        }
                        } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTotalCost">
                        <Form.Label>Costo Total</Form.Label>
                        <Form.Control id='total_cost_update' type="number" placeholder="Ingrese el costo total de la venta" onChange= {(e) =>{
                            set_total_cost_update(e.target.value);
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCant">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control id='cant_update' type="number" placeholder="Ingrese la cantidad de productos" onChange= {(e) =>{
                            set_cant_update(e.target.value);
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUnitCost">
                        <Form.Label>Costo Unitario</Form.Label>
                        <Form.Control id='unit_cost_update' type="number" placeholder="Ingrese el costo unitario del producto" onChange= {(e) =>{
                            set_unit_cost_update(e.target.value);
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control id='date_update' type="date" placeholder="Ingrese la fecha de venta" onChange= {(e) =>{
                            set_date_update(e.target.value);
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicIdClient">
                        <Form.Label>ID cliente</Form.Label>
                        <Form.Control id='id_client_update' type="number" placeholder="Ingrese el Id del cliente" onChange= {(e) =>{
                            set_id_client_update(e.target.value);
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNameClient">
                        <Form.Label>Nombre cliente</Form.Label>
                        <Form.Control id='name_client_update' type="text" placeholder="Ingrese el Nombre del cliente" onChange= {(e) =>{
                            set_name_client_update(e.target.value);
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSeller">
                        <Form.Label>Nombre vendedor</Form.Label>
                        <Form.Control id='seller_update' type="text" placeholder="Ingrese el Nombre del vendedor" onChange= {(e) =>{
                            set_seller_update(e.target.value);
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicState">
                            <Form.Check
                            inline
                            label="En proceso"
                            name="estado"
                            type="radio"
                            id="En proceso"
                            onChange = {(e) => {
                                
                                set_state_update("En proceso");
                            }}
                            />
                        <Form.Check
                            inline
                            label="Cancelada"
                            name="estado"
                            type="radio"
                            id="Cancelada"
                            onChange = {(e) => {
                                
                                set_state_update("Cancelada");
                                //e.target.value.toString()
                            }}
                            />

                        <Form.Check
                            inline
                            label="Entregada"
                            name="estado"
                            type="radio"
                            id="Entregada"
                            onChange = {(e) => {
                                
                                set_state_update("Entregada");
                                //e.target.value.toString()
                            }}
                            />
                        </Form.Group>
                    <br/>

                   
                        <Button variant="warning" onClick={()=>{
                            update_vending_db(id_update)
                        }
                            }>Actualizar</Button>
                    </Form>                 
            </Container>               
        </div>
    )
}
export default ListVending;





