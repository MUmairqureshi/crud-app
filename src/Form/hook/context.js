import React, { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';
import { reducer } from './reducer'
const initialState = {
    tasks: [ ]
}
export const Context = createContext(initialState)

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    function addtask(task) {
        dispatch({
            type: "Add",
            payload: task
        })
    }

    function remove(id) {
        dispatch({
            type: 'remove',
            payload: id
        })
    }
    function edit(task) {
        dispatch({
            type: 'edit',
            payload: task
        })
    }
    return (
        <Context.Provider value={{
            tasks: state.tasks,
            addtask,
            remove,
            edit
        }}>

            {children}

        </Context.Provider>
    )
}

