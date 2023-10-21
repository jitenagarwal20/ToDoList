import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
export default function Input(props) {
    const [inputText, setInputText] = useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    return (
        <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <Fab onClick={()=>{
            props.addItem(inputText)
            setInputText("")
        }}>
        <AddIcon />
        </Fab>
        </div>
    );
}
