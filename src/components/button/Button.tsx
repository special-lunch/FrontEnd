import React from 'react'
import styles from './Button.module.scss';


type ButtonPrsopsType = {
    text:string;
}

function Button(props:ButtonPrsopsType){
    const { text } = props;

    return(
        <button className={styles['button']}>{text}</button>
    )
}

export default Button;