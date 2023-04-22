import React from "react";
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Tienda</h3>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/Cervezas'} classname={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Cervezas</NavLink>
                <NavLink to={'/category/Destilados'} classname={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Destilados</NavLink>
                <NavLink to={'/category/Gaseosas'} classname={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Gaseosas</NavLink>

            </div>
            <CartWidget cantCarrito={0}/>
        </nav>
        // <div>
        //     <h1>NavBar</h1>
        //     <CartWidget cantCarrito={0}/>
        // </div>

    );
}

export {NavBar};
