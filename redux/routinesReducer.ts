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
            const { index } = getRoutineById(state.routines, action.payload.id);
            if (index >= 0) {
                state.routines[index] = action.payload
            } else {
                state.routines.push(action.payload);
            }
        },
        deleteRoutine: (state, action: PayloadAction<Routine>) => {
            state.routines = state.routines.filter((r) => r.id !== action.payload.id);
        }
    },
})

export const { addRoutine, deleteRoutine } = routinesSlice.actions;

export default routinesSlice.reducer;