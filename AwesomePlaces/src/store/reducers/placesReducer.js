import {PLACE_NAME_CHANGED, ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE} from '../actions/actionTypes';

const INITIAL_STATE = {
    placeName: "",
    places: [],
    showModal: false,
    currentPlace: null
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

        case SELECT_PLACE:
            return {
                ...state,
                currentPlace: state.places.find(place => {
                    return place.id === action.payload;
                }),
                showModal: true
            }; 

        case DELETE_PLACE: 
            return {
                ...state,
                placeName: "",
                places: state.places.filter(place => {
                    return place.id !== state.currentPlace.id;
                }),
                showModal: false,
                currentPlace: null
            };

        case DESELECT_PLACE: 
            return {
                ...state,
                placeName: "",
                showModal: false,
                currentPlace: null
            };

        default:
            return state;
    }
};

export default placesReducer;