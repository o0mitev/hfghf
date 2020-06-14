import { createStore } from 'redux';
import { rootReducer } from './reducer';

let initialState = {

   books: [
        {
            books: 'Lord of the Rings',
            author: 'J.R.R.Tolkin'
        },
        {
            books: 'Clash of Kings',
            author: 'J.R.R.Martin'
        }
    ]           
}


let store = createStore(rootReducer, initialState);

export default store;