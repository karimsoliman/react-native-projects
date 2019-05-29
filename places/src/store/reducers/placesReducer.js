import {PLACE_NAME_CHANGED, ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE} from '../actions/actionTypes';

const INITIAL_STATE = {
    placeName: "",
    places: []
};

const placesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        
        case PLACE_NAME_CHANGED: 
            return{
                ...state,
                placeName: action.payload
            };
        
        case ADD_PLACE: 
            return {
                ...state,
                placeName: "",
                places: state.places.concat({
                    name: action.payload, 
                    id: Math.random(),
                    image: {
                        uri: 'https://images.pexels.com/photos/221519/pexels-photo-221519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    }  
                })
            }; 

        case DELETE_PLACE: 
            return {
                ...state,
                placeName: "",
                places: state.places.filter(place => {
                    return place.id !== action.payload;
                }),
            };

        default:
            return state;
    }
};

export default placesReducer;