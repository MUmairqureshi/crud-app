import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddTodo = (props) => {
    return (
        <Form onSubmit={props.handleAddTodo}>
            <Form.Group controlId="item">
                <Form.Label>What you want to do?</Form.Label>
                <Form.Control type="text" name="todo"  value={props.vale}  onChange={(ev)=>props.val(ev.target.value)}   placeholder="Enter todo" required />

                {/* <label>

                    Enter Description <br />
                    <input type='text'
                        value={newDesc}
                        placeholder='Description'
                        onChange={(ev)=>props.val(ev.target.value)} required />
                </label> */}
            </Form.Group>
            <Button variant="primary" type="submit">Add Todo</Button>
        </Form>
    );
};

export default AddTodo;