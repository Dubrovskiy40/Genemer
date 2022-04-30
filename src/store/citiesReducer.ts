import {GET_CITIES} from "./types/sitiesTypes";
import {ActionsTypes} from "../actions/citiesAction";

export interface ICitiesReducer {
    city: string
    population: string
}

const initialState: Array<ICitiesReducer> = [];

const citiesReducer = (state = initialState, {type, payload}: ActionsTypes): Array<ICitiesReducer> => {
    switch (type) {
        case GET_CITIES:
            let cityOfMaxPopulation = payload.reduce((acc, curr) => acc.population > curr.population ? acc : curr);

            return [cityOfMaxPopulation, ...payload.filter((city) => {
                return +city.population > 50000 && city !== cityOfMaxPopulation;
            }).sort()
            ];

        default:
            return state;
    }
};

export default citiesReducer;