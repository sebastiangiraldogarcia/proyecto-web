import React from 'react';
import Navbar from '../navbar/Navbar'
import { Filter } from "./Filters";


const Principal = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Delicious food for you</h1>
            </div>
            <div>
                <input type="text" placeholder='Search' />
            </div>
            <div>
                <ul className="nav-menu">
                    {Filter.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )

                    })}
                </ul>
            </div>
        </div>
    )
}

export default Principal