import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
    libraries: libraryReducer,
    selectedLibraryId: selectionReducer
});

// console.log(store.getState());  ==>> {libraries: the list of libraries}
