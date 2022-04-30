import {CHANGE_STATUS, GET_STATUS} from "../store/types/statusTypes";

export type ActionsTypes = GetStatusActionType | ChangeStatusActionType

type GetStatusActionType = {
    type: typeof GET_STATUS
    payload: string
};

export const getStatus = (status: string) => ({
    type: GET_STATUS,
    payload: status
});

type ChangeStatusActionType = {
    type: typeof CHANGE_STATUS
    payload: string
};

export const changeStatus = (newStatus: string) => ({
    type: CHANGE_STATUS,
    payload: newStatus,
});