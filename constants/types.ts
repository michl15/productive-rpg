type Task = {
    name: string,
    priority: number,
    id: string,
    selected: boolean,
    timestamp?: Date
}

type Routine = {
    name: string,
    id: string,
    days: number[],
    daily: boolean
}

export type { Routine, Task }

