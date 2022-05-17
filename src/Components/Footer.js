import React from "react";
import { NavLink } from "reactstrap";

const Footer = () => {
    return (
        <div className="px-5 pt-5 pb-2 row fonting" style={{ backgroundColor: 'black', color: 'white' }}>

            <div className="col-12 col-sm-6 col-md-6 py-4">

                <h3><code>Cyber Bullying Detection</code></h3>
            </div>
            <div className="col-12 col-sm-6 col-md-4 offset-md-2">
                <p>Links :</p>
                <ul>
                    <li><NavLink href='/home' style={{ color: 'white' }} className='p-1'> Home </NavLink></li>
                    <li><NavLink href='/text' style={{ color: 'white' }} className='p-1'> Text Analysis</NavLink></li>
                    <li><NavLink href='/account' style={{ color: 'white' }} className='p-1'> Account Analysis</NavLink></li>
                    <li><NavLink href='/doc' style={{ color: 'white' }} className='p-1'> Document Analysis</NavLink></li>
                    <li><NavLink href='/latest' style={{ color: 'white' }} className='p-1'> Latest Tweet Analysis</NavLink></li>
                    <li><NavLink href='/query' style={{ color: 'white' }} className='p-1'> Query Analysis</NavLink></li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;
