import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface TimeState {
    currDay: string
}

// Define the initial state using that type
const initialState: TimeState = {
    currDay: new Date().toDateString()
}

export const routinesSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        updateDay: (state, action: PayloadAction<string>) => {
            state.currDay = action.payload;
        }
    },
})

export const { updateDay } = routinesSlice.actions;

export default routinesSlice.reducer;