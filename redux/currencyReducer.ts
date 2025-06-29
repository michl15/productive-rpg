import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CurrencyState {
    stepsBank: number
    tokens: number
    todaySteps: number
}

// Define the initial state using that type
const initialState: CurrencyState = {
    stepsBank: 0,
    tokens: 0,
    todaySteps: 0
}

export const routinesSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        updateStepsBank: (state, action: PayloadAction<number>) => {
            state.stepsBank = action.payload;
        },
        updateTodaySteps: (state, action: PayloadAction<number>) => {
            state.todaySteps = action.payload;
        }
    },
})

export const { updateStepsBank, updateTodaySteps } = routinesSlice.actions;

export default routinesSlice.reducer;