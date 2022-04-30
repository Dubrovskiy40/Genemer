import {GET_UNIVERSITY} from "./types/universityTypes";
import {ActionsTypes} from "../actions/universityAction";

export interface IUniversityReducer {
    name: string
}

const initialState: Array<IUniversityReducer> = [];

const universityReducer = (state = initialState, {type, payload}: ActionsTypes): Array<IUniversityReducer> => {
    switch (type) {
        case GET_UNIVERSITY:
            return [...payload]

        default:
            return state;
    }
};

export default universityReducer;