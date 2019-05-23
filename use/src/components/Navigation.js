import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    
    const submitLogout = () => {
        localStorage.removeItem('user');
        
    }


    return (
        <div>
            <Link to='/items'>Home</Link>
            <Link to="/items/new">Add Rental</Link>
            <Link to='/'>
                <span onClick={() => submitLogout()}>Logout</span>
            </Link>
            
            
            
        </div>
    )
}

export default Navigation;
