import React from 'react';
import style from './input.module.scss';

interface IInput {
    type: string
    minLength: number | undefined
    name: string | undefined
    warningText: string | undefined
    required: boolean | undefined
}

const Input: React.FC<IInput> = ({ type, minLength, name, warningText, required }) => {
    console.log('required',required)
    return (
        <input className={warningText ? `${style.input} ${style.input__warning}` : `${style.input}`} type={type} minLength={minLength} name={name}  required={required}/>
    );
};

export default Input;