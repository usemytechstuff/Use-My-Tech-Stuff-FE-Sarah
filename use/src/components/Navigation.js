import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import carousel2 from '../images/carousel2.jpg';
import Rentechlogo from '../images/Rentechlogo.svg';

const Navigation = () => {

    const submitLogout = () => {
        localStorage.removeItem('user');
    }

    return (

        <div>
            
            <Image src={carousel2}/>
                <NavContent className="nav justify-content-end">
                    <Logo className="nav-item">
                        <img className="nav-link" src={Rentechlogo} alt="logo"/>
                    </Logo>
                    <li className="nav-item">
                    
                        <Link to='/items' className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/items/new" className="nav-link">Add Rental</Link>
                    </li>
                    <li>
                        <Link to='/' className="nav-link">
                            <span onClick={() => submitLogout()}>Logout</span>
                        </Link>
                    </li>
                </NavContent>
         </div>
    )
}

export default Navigation;

const Image= styled.img`
    max-width: 1100px;
    width: 100%;
    height: 600px;
    position: relative;
    margin-bottom: 40px;
`
const NavContent=styled.div`
    width: 90%;
    margin: 0 auto;
    position: absolute;
    padding: 0 70px;
    top: 5px;
    list-style-type: none;
    li{
        font-size: 20px;
        margin-top: 10px;
        a{
            color: white;
        }
    }
`
const Logo=styled.div`
    margin-right: 110px;
    width: 200px;
    height: 150px;
    img{
        width: 100%;
        height: auto;
    }
`
 






