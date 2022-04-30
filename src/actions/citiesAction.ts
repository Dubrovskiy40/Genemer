import {GET_CITIES} from "../store/types/sitiesTypes";

export type ActionsTypes = GetCitiesActionType

type ObjectType = {
    city: string
    population: string
};

type GetCitiesActionType = {
    type: typeof GET_CITIES
    payload: Array<ObjectType>
};

export const getCities = (cities: Array<ObjectType>) => ({
    type: GET_CITIES,
    payload: cities
});