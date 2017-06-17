import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBook from './reducer_active_book'

//application state has no tie to component state
//application state formed by reducers

const rootReducer = combineReducers({
    books: BookReducer,
    activeBook: ActiveBook
});

export default rootReducer;
