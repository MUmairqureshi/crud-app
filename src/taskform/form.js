import React, { useState } from 'react'
import './form.css'


export function Form() {
    return (
        <div>
            <form className="add-form" >
                <div className="form">
                    <label>Task</label>
                    <input type="text" placeholder="add task"  />
                </div>
                <div className="form">
                    <label>Day & Time</label>
                    <input type="text" placeholder="add day & time"  />
                </div>
                <input type="submit" className="btn btn-block" value="Save Task" />
            </form>



        </div>
    )
}





































