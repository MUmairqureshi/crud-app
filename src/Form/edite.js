import React, { useContext, useState , useEffect } from "react";
import './ind.css'
import { v4 as uuidv4 } from 'uuid';
import { Context } from './hook/context'
import {  useNavigate, useParams } from 'react-router-dom';
export function Edite() {
    const {edit, tasks } = useContext(Context)
    
    const [editval, setEditval] = useState({
        id: null,

        taskname: " ",
        taskdate: " ",
      });
    
      const navigate = useNavigate();
       const {id} = useParams();

      useEffect(() => {
        const UserId = id;
        console.log(UserId)
        const selectedUser = tasks.find((users) => users.id === UserId);
        setEditval(selectedUser);
        console.log(selectedUser)
      }, [id, tasks]);
    
      const submited = (e) => {

        edit(editval);
        e.preventDefault();
         navigate("/");
       
      };


    return (
        <div>
            <form className="form" onSubmit={submited}   >
                <div className="tast-text">
                    <label>Task</label>
                    <input type="text" value={editval.taskname} taskname="taskname" onChange={(e) => setEditval({ ...editval, taskname : e.target.value})} placeholder="add task" required />
                </div>
                <br />
                <div className="tast-date">
                    <label>Day & Time</label>
                    <input type="date" value={editval.taskdate} taskdate="taskdate" onChange={(e) => setEditval({...editval , taskdate : e.target.value})} placeholder="date" required />
                </div>
                 <input type="submit" className="btn btn-block" value="Update Task" />
            </form>
        </div>


    )
}