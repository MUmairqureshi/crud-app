import React from 'react';
import './form.css'

export function Header() {
  return (
    <header className="header">
    <h2 className="app-header">Task Manager App</h2>
    {/* onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text=   */}
    <button  className="btn btn-danger">Add</button>
  </header>
  )
}
// onClick={onClick} style={{ backgroundColor: color }}
// {changeTextAndColor ? 'Close' : 'Add'}
      {/* changeTextAndColor */}