import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl = "http://localhost:8000/get_tasks";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(serverUrl);
            return response.data;
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || 'Ошибка запроса');
        }
    });