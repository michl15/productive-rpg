import { Routine } from '@/constants/types';
import { getRoutineById } from '@/util/routinesUtil';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface RoutinesState {
    routines: Routine[]
}

// Define the initial state using that type
const initialState: RoutinesState = {
    routines: [],
}

export const routinesSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addRoutine: (state, action: PayloadAction<Routine>) => {
            state.routines.push(action.payload);
        },
        updateRoutine: (state, action: PayloadAction<Routine>) => {
            const { index } = getRoutineById(state.routines, action.payload.id);
            state.routines[index] = action.payload;
        }
    },
})

export const { addRoutine } = routinesSlice.actions;

export default routinesSlice.reducer;