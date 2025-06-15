import { Task } from '@/constants/types';
import { getTaskIndexById } from '@/util/tasksUtil';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface TasksState {
    taskList: Task[],
    completed: Task[],
}

// Define the initial state using that type
const initialState: TasksState = {
    taskList: [],
    completed: [],
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        resetTasks: (state) => {
            state.taskList = [];
        },
        addTask: (state, action: PayloadAction<Task>) => {
            const findIndex = getTaskIndexById(action.payload.id, state.taskList);
            if (findIndex < 0) {
                state.taskList.push(action.payload);
            } else {
                state.taskList[findIndex] = action.payload;
            }
            state.taskList.sort((a, b) => b.priority - a.priority)
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.taskList = state.taskList.filter((task) => task.id !== action.payload);
            state.taskList.sort((a, b) => b.priority - a.priority)
        },
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.taskList = action.payload;
            state.taskList.sort((a, b) => b.priority - a.priority)
        },
        completeTasks: (state, action: PayloadAction<number[]>) => {
            const deleteList = action.payload;
            deleteList.sort((a, b) => b - a);
            for (let i = 0; i < deleteList.length; i++) {
                const ind = deleteList[i]
                if (state.completed) {
                    state.completed.push(state.taskList[ind]);
                } else {
                    state.completed = [state.taskList[ind]];
                }
                state.taskList.splice(ind, 1);
            }
        }
    },
})

export const { resetTasks, addTask, removeTask, setTasks, completeTasks } = taskSlice.actions;

export default taskSlice.reducer;