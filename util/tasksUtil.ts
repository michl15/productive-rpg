import { Task } from "@/constants/types";

const randomId = (length: number = 6) => {
    return Math.random().toString(36).substring(2, length + 2);
}

const getTaskById = (id: string, taskList: Task[]) => {
    for (let i in taskList) {
        if (taskList[i].id === id) {
            return taskList[i];
        }
    }
    return undefined;
}

const getTaskIndexById = (id: string, taskList: Task[]) => {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            return i;
        }
    }
    return -1;
}

export { getTaskById, getTaskIndexById, randomId };

