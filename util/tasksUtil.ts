import { Task } from "@/constants/types";

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

export { getTaskById, getTaskIndexById };

