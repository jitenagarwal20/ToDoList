import React,{useState} from 'react'
import ToDoItem from './ToDoItem';
import Input from './Input';
export default function Form() {
  
  const [items,setItems]=useState([]);
  function toDelete(id){
    setItems( (previtems)=> {
        return(previtems.filter((item, index) => {
            return index !== id
        }))
    })
  }

  function HandleClick(toDoItem){
    setItems(prevItems =>{
      return [...prevItems,toDoItem]
    })
  }
  return (
    <div className="form">
        <Input addItem={HandleClick}/>
        <div>
          <ul>
            {items.map((value,index) =>{
              return <ToDoItem key={index} id={index} item={value} onSelect={toDelete} />
            })}
          </ul>
        </div>
    </div>
  )
}
