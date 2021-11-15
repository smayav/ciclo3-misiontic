import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const PrivateRoutes =({children}) => {
    const {isAuthenticated} = useAuth0();
    return isAuthenticated? (
        <div>
            {children}
        </div>
    ):
    <div>
       
    </div>

}

export default PrivateRoutes
