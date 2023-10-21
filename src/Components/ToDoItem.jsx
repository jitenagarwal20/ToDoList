import React from 'react'

export default function ToDoItem(props) {
  return (
    <div onClick={() =>{
        props.onSelect(props.id)
    }}>
        <li>{props.item}</li>
    </div>
  )
}
