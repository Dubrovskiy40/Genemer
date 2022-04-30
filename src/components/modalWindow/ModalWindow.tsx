import React from 'react';
import style from './modalWindow.module.scss';

interface IModalWindow {
    active: boolean
    setActive: (boolean: boolean) => void
    setStatus: (string: string) => void
    value: string
    handleChangeStatus: () => void
}

const ModalWindow: React.FC<IModalWindow> = ({ active, setActive, setStatus, value, handleChangeStatus }) => {

    return (
        <div className={active ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={() => setActive(false)}>
            <div className={active ? `${style.modal__content} ${style.active}` : `${style.modal__content}`} onClick={e => e.stopPropagation()}>
                <input className={style.modal__inp} name="status" onChange={(e) => setStatus(e.target.value)} value={value} />
                <button className={style.modal__btn} type="submit" onClick={handleChangeStatus}>Изменить статус</button>
            </div>
        </div>
    );
};

export default ModalWindow;