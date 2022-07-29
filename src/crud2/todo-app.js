import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './style.css'

import { v4 as uuidv4 } from 'uuid';

export function Todo() {



    const [value, setValue] = useState(" ")
    const [edit, setEdit] = useState(true)

    const [isedit, setIsedit] = useState(null)
    const [newtext, setText] = useState([
        // {
        //     text: ["umiar"],


        // }
    ]);

    console.log(isedit)
    console.log(newtext)
    // console.log(setText)
    // console.log(setValue)


    const remove = (id) => {

        // const editTodo = newtext.filter((edit)=> edit.id == id )


        const newTodos = [...newtext];
        newTodos.splice(id, 1);
        setText(newTodos);
    }

    const markTodo = (id) => {
        const newTodos = [...newtext];
        newTodos[id].isDone = true;
        setText(newTodos);
    };



    // const renderEditForm = () => {
    //     if (newTodos.edit) {
    //         return <form onSubmit={onUpdateHandle.bind(this)}>
    //             <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
    //             <button className="update-add-item">Update</button>
    //         </form>
    //     }
    // }



    const addTodo = (text) => {
        const id = uuidv4()

        const tsk =  {id , text }

        setText( [...newtext, tsk]);
        if (value && !edit) {

            setText(newtext.map((itm) => {
                if (itm.id === isedit) {
                    return { ...itm, text: value, id: uuidv4() }
                }
                return itm
            }));

            setEdit(true)
            setValue("")
            setIsedit(null)
        } else {
            return "  "
        }
    };


    const edittodo = (id) => {


        const newTodos = newtext.find((obj) => {
            return obj.id === id
        });
        setEdit(false);
        setValue(newTodos.text)
        setIsedit(newTodos.id)
        console.log(id)
        console.log(newTodos)

    }







    const handlesubmit = (ev) => {
        ev.preventDefault()
        addTodo(value)
        // => {
        //     return [...obj, value]
        // })
        setValue("")
    }

    return (
        <div className='from'>
            <form onSubmit={handlesubmit}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required />
                {edit ? <Button variant="primary" type="submit" >Add</Button> : <Button variant="primary" type="submit" >Update</Button>}
            </form>
            {newtext.map((val, id) => {
                return (
                    <h1 key={val.id}>
                        {/* {val} */}

                        <span style={{ textDecoration: val.isDone ? "line-through" : "" }}>{val.text}</span>
                        <Button variant="outline-success" onClick={() => markTodo(id)}>✓</Button>{' '}
                        <Button variant="primary" key={val.id} onClick={() => edittodo(val.id)} >Edit</Button>
                        <Button variant="primary" key={val.id} onClick={() => remove(id)} >X</Button>  </h1>
                )
            }

            )}
        </div>
    )
}