import React from "react";
import './ind.css'
import {Header} from './Header'
import {Task} from './Tasks'
import {Edite} from './edite'
import {Add} from './addtasks'

// import{Taskprovider} from './hook/context'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export function Container() {
    return (

        <div className="container">
  <Router>
  <Header/>
        <Routes>
          <Route path="/" element={<Task/>} />
          <Route path="/Add" element={<Add/>} />

          <Route path="/edite/:id" element={<Edite/>} exact/>


        </Routes>


      </Router>
{/* */}

{/* <Task/> */}


        </div>
        // </Taskprovider>


    )
    }