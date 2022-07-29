import React from "react";
import {Link} from 'react-router-dom'
import './ind.css'
export function Header() {
    return (
        <header className="header">
<h1>Task Manager App</h1>
<Link to="/Add"> <button  className="btn btn-secondary">Add</button></Link>
        </header>


    )
}