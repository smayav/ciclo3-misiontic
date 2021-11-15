import React, {useState, useEffect} from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Navbars = () => {
    const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();
    const [textButton, setTextButton] = useState('Login');
    const [Name, setName] = useState('')
    
    useEffect(() => {
        if(isAuthenticated){
            setTextButton('Logout')
            setName(user.name)
        }else{
            setTextButton('Login')
            setName('')
        }
        
    }, [isAuthenticated])

    useEffect(() => {
        const getToken = async ()=>{
            const accessToken = await getAccessTokenSilently();
            localStorage.setItem('token', accessToken)
        }
        if (isAuthenticated){
            getToken();

        }
        
    }, [isAuthenticated, getAccessTokenSilently])


    return (

            <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Nav.Link className="navbar-brand" href="home.html"><img src={process.env.PUBLIC_URL + '/img/logo.jpg'} height="55" alt="logo" loading="lazy" /></Nav.Link>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        
                            <Nav.Link className="nav-link" aria-current="page" ><Link to='/'>Inicio</Link></Nav.Link>
                        
                        {
                            isAuthenticated ?
                            <Nav title={Name}>
                            <Nav.Link className="nav-link"><Link to='/products'>Productos</Link></Nav.Link>
                            <Nav.Link className="nav-link"><Link to='/vending'>Ventas</Link></Nav.Link>
                            <Nav.Link className="nav-link"><Link to='/admin'>Admin</Link></Nav.Link>
                            </Nav>:null
                        }
                        
                    </ul>
                </div>
            </div>
            {
            isAuthenticated ?
            <button onClick={()=>logout({returnTo: window.location.origin})}
            className='btn btn-primary'>{textButton}</button>:
            <button onClick={()=>loginWithRedirect()}
            className='btn btn-primary'>{textButton}</button>
        }
        </Navbar>

    
    )
}

export default Navbars
