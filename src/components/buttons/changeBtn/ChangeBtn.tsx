import React, {useState} from 'react';
import style from './changeBtn.module.scss';

interface IChangeBtn {
    name: string
}

const ChangeBtn: React.FC<IChangeBtn> = ({ name }) => {
    const [lastTime, setLastTime] = useState(null);

    const getLastTime = () => {
        const date: any = new Date().toLocaleString('ru',
            {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            });

        setLastTime(date)
    };

    return (
        <div className={style.changeBtn_wrap}>
            <button className={style.btn} type="submit" onClick={getLastTime}>{name}</button>
            <span className={style.btn__text}>{lastTime ? `последние изменения: ${lastTime}`: ''}</span>
        </div>

    );
};

export default ChangeBtn;