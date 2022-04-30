import {CHANGE_STATUS, GET_STATUS} from "./types/statusTypes";
import {ActionsTypes} from "../actions/statusAction";

const initialState: string = 'Прежде чем действовать, надо понять';

const statusReducer = (state = initialState, {type, payload}: ActionsTypes): string => {
    switch (type) {
        case GET_STATUS:
            return state;

        case CHANGE_STATUS:
            return payload;

        default:
            return state;
    }
};

export default statusReducer;