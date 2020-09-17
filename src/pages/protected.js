import React from 'react'
import protectedRoutes from '../config/protectedRoutes'

function Protected() {
    return (
        <div className="Protected">
            {protectedRoutes}
        </div>
    )
}
  
export default Protected