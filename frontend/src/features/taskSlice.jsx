import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './fetchTasks';

const initialState = {
    tasks: [],
    loading: false,
    error: null
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload.tasks;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Ошибка при загрузке задач';
            });
    }
});

export default taskSlice.reducer;
