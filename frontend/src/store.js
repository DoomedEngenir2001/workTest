import tasksReducer from './features/taskSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
});