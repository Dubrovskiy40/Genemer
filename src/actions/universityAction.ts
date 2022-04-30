import {GET_UNIVERSITY} from "../store/types/universityTypes";

export type ActionsTypes = GetUniversityActionType

type ObjectType = {
    name: string
};

type GetUniversityActionType = {
    type: typeof GET_UNIVERSITY
    payload: Array<ObjectType>
};

export const getUniversity = (university: Array<ObjectType>) => ({
    type: GET_UNIVERSITY,
    payload: university
});