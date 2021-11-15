import React from 'react'
import PrivateRoutes from '../Components/PrivateRoutes'

const PrivateLayout = ({children}) => {
    return (
        <PrivateRoutes>
            <div>
                {children}
            </div>
        </PrivateRoutes>
        
    )
}

export default PrivateLayout
