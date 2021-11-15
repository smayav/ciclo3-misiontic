import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Form, Button, Container, Table} from 'react-bootstrap';
import Axios from 'axios';



const User = () => {

     const [barcode_add, set_barcode_add] = useState(0);
     const [name_user_add, set_name_user_add] = useState("");
     const [rol_add, set_rol_add] = useState("");
     const [state_add, set_state_add] = useState("");

     const [barcode_update, set_barcode_update] = useState(0);
     const [name_user_update, set_name_user_update] = useState("");
     const [rol_update, set_rol_update] = useState(0);
     const [state_update, set_state_update] = useState("");
     const [id_update, set_id_update] = useState(0);

     const [users, set_users] = useState ([])

     useEffect(() => {
       Axios.get('http://localhost:8080/api/v1/user/list').then((res) =>{
           console.log(res.data.users);
           set_users(res.data.users);
       })
     }, [])
     
     const add_user_db = () =>{
         console.log (barcode_add + name_user_add + rol_add)
         Axios.post('http://localhost:8080/api/v1/user/add', {
             barcode: barcode_add,
             name_user: name_user_add,
             rol: rol_add,
             state: state_add
         })
     }

     const delete_user = (_id) =>{
         Axios.delete ('http://localhost:8080/api/v1/user/delete/'+_id)
     }

     const update_user_db = (_id) =>{
        Axios.put('http://localhost:8080/api/v1/user/update', {
            _id: _id,
            barcode: barcode_update,
            name_user: name_user_update,
            rol: rol_update,
            state: state_update
        })
     }

     

    return (
        <div>
            <h1 className="bg-warning text-center">Listado de Usuarios y Roles</h1>
            <div className="col-sm">
                <Link to='/users' className="btn btn-danger" role="button" >Regresar</Link><br/>
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
                    <Form.Label>Id Usuario</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el ID del usuario" onChange= {(e) =>{
                        set_barcode_add(e.target.value);
                    }
                    } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNameUser">
                    <Form.Label>Nombre del usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del usuario" onChange= {(e) =>{
                        set_name_user_add(e.target.value);
                    }}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicRol"> Rol<br/>
                    <Form.Check
                    inline
                    label="Usuario"
                    name="estado"
                    type="checkbox"
                    id="Usuario"
                    onChange = {(e) => {
                        set_rol_add("Usuario");
                    }}
                    />

                <Form.Check
                    inline
                    label="Administrador"
                    name="estado"
                    type="checkbox"
                    id="Administrador"
                    onChange = {(e) => {
                        set_rol_add("Administrador");
                        //e.target.value.toString()
                    }}
                    />

                <Form.Check
                    inline
                    label="Vendedor"
                    name="estado"
                    type="checkbox"
                    id="Vendedor"
                    onChange = {(e) => {
                        set_rol_add("Vendedor");
                        //e.target.value.toString()
                    }}
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicState"> Estado<br/>
                    <Form.Check
                    inline
                    label="Pendiente"
                    name="estado"
                    type="radio"
                    id="Pendiente"
                    onChange = {(e) => {
                        set_state_add("Pendiente");
                    }}
                    />

                <Form.Check
                    inline
                    label="Autorizado"
                    name="estado"
                    type="radio"
                    id="Autorizado"
                    onChange = {(e) => {
                        set_state_add("Autorizado");
                    }}
                    />

                <Form.Check
                    inline
                    label="No Autorizado"
                    name="estado"
                    type="radio"
                    id="No Autorizado"
                    onChange = {(e) => {
                        set_state_add("No Autorizado");
                        //e.target.value.toString()
                    }}
                    />
                </Form.Group>
                <Button variant="primary" onClick={add_user_db} >Agregar</Button>
            </Form>
                    <hr/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ID del Usuario</th>
                    <th>Nombre del Usuario</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((value, key) =>
                            <tr>
                                <td>
                                    {key}
                                </td>
                                <td>
                                    {value.barcode}
                                </td>
                                <td>
                                    {value.name_user}
                                </td>
                                <td>
                                    {value.rol}
                                </td>
                                <td>
                                    {value.state.toString()}
                                </td>
                                <td>
                                
                                <Button variant="primary" onClick={()=>{
                                    set_id_update(value._id);
                                    set_barcode_update(value.barcode);
                                    set_name_user_update (value.name_user);
                                    set_rol_update (value.rol);
                                    set_state_update (value.state.toString());
                        
                                    document.getElementById('barcode_update').defaultValue = value.barcode;
                                    document.getElementById('name_user_update').defaultValue = value.name_user;
                                    
                                    
                                }} >Editar</Button>
                                </td>
                                <td>
                                <Button variant="danger" onClick={() => delete_user(value._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </Table>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicBarcode">
                    <Form.Label>Id Usuario</Form.Label>
                    <Form.Control id='barcode_update' disabled='true' type="number" placeholder="Ingrese el ID del usuario" onChange= {(e) =>{
                        set_barcode_update(e.target.value);
                    }
                    } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNameUser">
                    <Form.Label>Nombre del usuario</Form.Label>
                    <Form.Control id='name_user_update' type="text" placeholder="Ingrese el nombre del usuario" onChange= {(e) =>{
                        set_name_user_update(e.target.value);
                    }}/>
                </Form.Group>
                
                <Form.Group className="mb-3" id='rol_update' controlId="formBasicRol"> Rol<br/>
                    <Form.Check
                    inline
                    disabled='true'
                    label="Usuario"
                    name="estado"
                    type="checkbox"
                    id="Usuario"
                    onChange = {(e) => {
                        set_rol_update("Usuario");
                    }}
                    />

                <Form.Check
                    inline
                    label="Administrador"
                    name="estado"
                    type="checkbox"
                    id="Administrador"
                    onChange = {(e) => {
                        set_rol_update("Administrador");
                        //e.target.value.toString()
                    }}
                    />

                <Form.Check
                    inline
                    label="Vendedor"
                    name="estado"
                    type="checkbox"
                    id="Vendedor"
                    onChange = {(e) => {
                        set_rol_update("Vendedor");
                        //e.target.value.toString()
                    }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicState"> Estado<br/>
                    <Form.Check
                    inline
                    disabled='true'
                    label="Pendiente"
                    name="estado"
                    type="radio"
                    id="Pendiente"
                    onChange = {(e) => {
                        set_state_update("Pendiente");
                    }}
                    />

                <Form.Check
                    inline
                    label="Autorizado"
                    name="estado"
                    type="radio"
                    id="Autorizado"
                    onChange = {(e) => {
                        set_state_update("Autorizado");
                    }}
                    />

                <Form.Check
                    inline
                    label="No Autorizado"
                    name="estado"
                    type="radio"
                    id="No Autorizado"
                    onChange = {(e) => {
                        set_state_update("No Autorizado");
                        //e.target.value.toString()
                    }}
                    />
                </Form.Group>
                        <Button variant="warning" onClick={()=>{
                            update_user_db(id_update)
                        }
                            }>Actualizar</Button>
                    </Form>                 
            </Container>               
        </div>
    )
}
export default User;