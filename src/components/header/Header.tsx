import React, {useState} from 'react';
import style from './header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import ModalWindow from "../modalWindow/ModalWindow";
import {changeStatus} from "../../actions/statusAction";
import {RootState} from "../../store";

const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    const stateStatus = useSelector((state: RootState) => state.status);
    const [status, setStatus] = useState(stateStatus);
    const dispatch = useDispatch();

    const handleChangeStatus = () => {
        dispatch(changeStatus(status));
        setModalActive(false);
    };

    return (
        <div className={style.header}>
            <div className={style.header__text_wrap}>
                <h1 className={style.header__title}>Здравствуйте, <b>Человек № 3596941</b></h1>
                <button className={style.header__btn} onClick={() => setModalActive(true)}>Сменить статус</button>
            </div>
            <span className={style.header__status}>{status}</span>
            <ModalWindow active={modalActive} setActive={setModalActive} setStatus={setStatus} value={status} handleChangeStatus={handleChangeStatus}/>
        </div>
    );
};

export default Header;