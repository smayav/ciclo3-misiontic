import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import ListProduct from '../Pages/Admin/ListProduct';
import Roles from '../Pages/Admin/Roles';
import ListVending from '../Pages/Admin/ListVending';
import User from '../Pages/Admin/User';
import Index from '../Pages/Public/Index';
import Admin from '../Pages/Public/Admin';
import Products from '../Pages/Public/Products';
import Vending from '../Pages/Public/Vending';
import Home from '../Pages/Public/Home'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path ={['/listproducts', '/listvending', '/roles', '/user']}>
                    <PrivateLayout>
                        <Switch>
                            <Route exact path='/listproducts'>
                                <ListProduct/>
                            </Route>
                            <Route exact path='/listvending'>
                                <ListVending/>
                            </Route>
                            <Route exact path='/roles'>
                                <Roles/>
                            </Route>
                            <Route exact path='/user'>
                                <User/>
                            </Route>
                        </Switch>

                    </PrivateLayout>
                </Route>

                <Route exact path = {['/', '/home', '/admin', '/products', '/vending']}>
                    <PublicLayout>
                        <Switch>
                            <Route exact path='/'>
                                <Index/>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route exact path='/home'>
                                <Home/>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route exact path='/admin'>
                                <Admin/>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route exact path='/products'>
                                <Products/>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route exact path='/vending'>
                                <Vending/>
                            </Route>
                        </Switch>
                        
                    </PublicLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
