import React, { useContext, useState , useEffect } from "react";
import './ind.css'
import { v4 as uuidv4 } from 'uuid';
import { Context } from './hook/context'
import { Link, useNavigate, useParams } from 'react-router-dom';
export function Add() {
    const { addtask} = useContext(Context)
    const [taskname, setValue] = useState(" ")
    const [taskdate, setDate] = useState(" ")
const navigate = useNavigate()
    

      const submited = (e) => {
        e.preventDefault();
const tasksval = {
    id: uuidv4() ,
    taskname ,
    taskdate

}
        addtask( tasksval)

        setValue(" ")
        setDate(" ")
        navigate("/");
      };


    return (
        <div>
            <form className="form" onSubmit={submited}   >
                <div className="tast-text">
                    <label>Task</label>
                    <input type="text" value={taskname} onChange={(e) => setValue(e.target.value)} placeholder="add task" required />
                </div>
                <br />
                <div className="tast-date">
                    <label>Day & Time</label>
                    <input type="date" value={taskdate} onChange={(e) => setDate( e.target.value)} placeholder="date" required />
                </div>
                 <input type="submit" className="btn btn-block" value="Save Task" /> 
            </form>
        </div>


    )
}