import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        task_name: "meeting",
        task_content: "meeting with supervisor",
        days_of_week: "Monday",
        repeat_weekly: 'False',
        user_token: "",
    },
    reducers: {
        chooseTaskName: (state, action) => { state.task_name = action.payload },
        chooseContent: (state, action) => { state.task_content = action.payload },
        chooseDays: (state, action) => { state.days_of_week = action.payload },
        chooseRepeat: (state, action) => { state.days_of_week = action.payload },
        chooseUser: (state, action) => { state.user_token = action.payload }
    }
});

export const reducer = rootSlice.reducer;
export const { chooseTaskName, chooseContent, chooseDays, chooseRepeat, chooseUser } = rootSlice.actions;