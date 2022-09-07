import React, { Component } from 'react';
import { Menu } from "./Menu"

import '../../css/navbar/Nav.css';

const Nav = () => {


    return (
    <nav className="NavbarItems">
        <h1 className="logo">Delivery</h1>
        <div className="menuIcon">

        </div>
        <ul className="nav-menu">
            {Menu.map((item, index) => {
                return (
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )

            })}
        </ul>
    </nav>
    )
}

export default Nav