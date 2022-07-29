import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

import { v4 as uuidv4 } from 'uuid';

export function Todoapp() {
    const [text, setText] = useState([])
    const [value, setValue] = useState(" ")
    const [prop, setProp] = useState(" ")
    const [isedit, setIsedit] = useState(true)
    const [valedit, setValedit] = useState(null)
    const [valid, setValid] = useState( )
    console.log(valid)
    console.log(valedit)

    console.log(prop)
    console.log(text)



    const marke = (id) => {
        const mark = [...text]
        mark[id].isDone = true

        setText(mark)
    }
    const edit = (id) => {
        const edit = text.find((x) => {
            return x.id === id
        })
        setValedit(edit.id)


        const tx = prompt(edit.tx)
        setIsedit(false)
        const data = text.map((itm) => {
            if (itm.id === id) {
                return { ...itm, tx: tx, id: uuidv4(), }
            }
            return itm

        })


        setValedit(null)
        setText(data)
    }



    const Add = (tx) => {
        const id = uuidv4()
        const newtodo = { id, tx }
        setText([...text, newtodo])



        setValedit(null)
    }
    const remove = (id) => {
        const del = [...text]
        del.splice(id, 1)
        setText(del)
    }

    const submit = (e) => {

        e.preventDefault()
        Add(value)
        setValue(" ")
    }
    return (
        <>
            <Form onSubmit={submit}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="enter value" required />
                <button type="submit" className='primary'>Add</button>




            </Form>
            {text.map((val, id) => {
                return (
                    <h2 key={id}>  <span style={{ textDecoration: val.isDone ? "line-through" : " " }}>{val.tx} </span>
                        <button variant="outline-success" onClick={() => marke(id)} className='primary'>✓</button>
                        <button variant="outline-success" onClick={() => setValid(val.id)} className='primary'>Edit</button>
                        <button onClick={() => remove(id)} className='primary'>X</button>

                    </h2>

                )
            }
            )}
        </>

    )
}