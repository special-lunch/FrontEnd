import React from 'react'
import styles from './TextInput.module.scss';
import TextField from '@mui/material/TextField';


type TextInputPropsType ={
    text :string;
    type:string;
}

function TextInput(props:TextInputPropsType){
    const { text, type } = props;
    return (
        <>
        <p>{text}</p>
        <input type={type} />

        </>
    )
}

export default TextInput;