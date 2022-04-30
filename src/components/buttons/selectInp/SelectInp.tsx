import React from 'react';
import style from '../input/input.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

interface ISelectInp {
    state: string | undefined
    name: string | undefined
}

const SelectInp: React.FC<ISelectInp> = ({ state, name }) => {
    const stateCities = useSelector((state: RootState) => state.cities);
    const stateUniversity = useSelector((state: RootState) => state.university);

    return (
        <div>
            <select name={name} className={style.input}>
                {
                    state === 'city'
                        ? stateCities?.map(city => {
                            return <option key={city.city}>{city.city}</option>
                        })
                        : stateUniversity?.map((university, ind) => {
                            return <option key={ind}>{university.name}</option>
                        })
                }
            </select>
        </div>
    );
};

export default SelectInp;