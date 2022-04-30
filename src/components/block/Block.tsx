import React from 'react';
import style from "./bloc.module.scss";
import Input from "../buttons/input/Input";
import SelectInp from "../buttons/selectInp/SelectInp";

interface IBlock {
    title: string
    select: boolean
    type: string
    text?: string | undefined
    minLength?: number | undefined
    state?: string | undefined
    name?: string | undefined
    warningText?: string | undefined
    required?: boolean | undefined
}

const Block: React.FC<IBlock> = ({ title, select, type, text, minLength, state, name, warningText, required }) => {

    return (
        <div className={style.block}>
            <span className={style.block__title}>{title}</span>
            <div className={style.block__inp_wrap}>
                {
                    select
                        ? <SelectInp state={state} name={name} />
                        : <Input type={type} minLength={minLength} name={name} warningText={warningText} required={required} />
                }
                <span className={style.block__warning}>{warningText}</span>
            </div>
            <span className={style.block__text}>{text}</span>
        </div>
    );
};

export default Block;