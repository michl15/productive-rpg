import { RootState } from "@/redux/store";
import { getTaskById } from "@/util/tasksUtil";
import { useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import Create from "../create";

export default function Edit() {
    const { id } = useLocalSearchParams();
    const { taskList } = useSelector((state: RootState) => state.tasksReducer);

    const task = getTaskById(id as string, taskList);

    return (
        <Create task={task} />
    )
}
