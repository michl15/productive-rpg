import { RootState } from "@/redux/store";
import { getRoutineById } from "@/util/routinesUtil";
import { useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import CreateRoutine from "../create";

export default function Edit() {
    const { id } = useLocalSearchParams();
    const { routines } = useSelector((state: RootState) => state.routinesReducer);

    const { routine } = getRoutineById(routines, id as string);

    return <CreateRoutine routine={routine} />

}