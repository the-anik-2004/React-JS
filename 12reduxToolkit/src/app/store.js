import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
/**
 NOTES:-
 1.At first bring configureStore
 2.Export configureStore 
 */