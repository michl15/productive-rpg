import { Routine } from "@/constants/types";

const getRoutinesByDay = (routines: Routine[], day: number) => {
    return routines.filter((r) => r.daily || r.days.includes(day));
}

const getRoutineById = (routines: Routine[], id: string) => {
    for (let i = 0; i < routines.length; i++) {
        if (routines[i].id === id) {
            return { routine: routines[i], index: i };
        }
    }
    return { routine: null, index: -1 };
}

export { getRoutineById, getRoutinesByDay };

