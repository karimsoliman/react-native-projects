import {PLACE_NAME_CHANGED, ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE} from './actionTypes';

export const placeNameChanged = (placeName) => {
    return {
        type: PLACE_NAME_CHANGED,
        payload: placeName
    };
};

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        payload: placeName
    };
};

export const deletePlace = (id) => {
    return {
        type: DELETE_PLACE,
        payload: id
    };
};


