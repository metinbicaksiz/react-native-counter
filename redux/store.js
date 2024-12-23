import counterReducer from './reducers'
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: counterReducer,
})
export default store;