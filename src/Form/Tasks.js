import React, { useContext, useState } from "react";
import './ind.css'
import { Context } from './hook/context'

import { FaPencilAlt, FaTimes } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
export function Task() {


  const { tasks, remove,  } = useContext(Context)







 








  return (
    <div>

      <h3>Number of Tasks: {tasks.length}</h3>
      {tasks.length < 1 ? <p> No Task Found</p> : " "}

      {tasks.map((data, id) => {
        return (

          <div className="task" key={id} >
            <div>
              <p className="taskName"><span>Taks Name :  </span> {data.taskname} </p>
              <p className="taskDate">     <span>Date of Competion: </span>{data.taskdate}  </p>
            </div>
            <div>
              <Link to={`/edite/${data.id}`}> 
              <p className="edit"> <FaPencilAlt /> </p></Link>
              <p className="remove"> <button onClick={() => remove(data.id)}><FaTimes /></button></p>
            </div>
          </div>
        )
      })}
    </div>

  )
}