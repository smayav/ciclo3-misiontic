import React from 'react'
import Navbars from '../Components/Navbars'

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbars/>
            {children}
        </div>
    )
}

export default PublicLayout
