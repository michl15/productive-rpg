import Button from "@/components/Button";
import TaskCard from "@/components/TaskCard";
import { coreStyles } from "@/constants/styles";
import { RootState } from "@/redux/store";
import { completeTasks } from "@/redux/tasksReducer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Tasks() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { taskList } = useSelector((state: RootState) => state.tasksReducer);

    const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

    const onCreateClick = () => {
        router.replace("/(tabs)/(tasks)/create")
    }

    const onCompletedClick = () => {
        router.push("/(tabs)/(tasks)/completed")
    }

    const onSetCompleted = () => {
        dispatch(completeTasks(checkedTasks));
        setCheckedTasks([]);
    }

    const onCheckTask = (index: number) => {
        setCheckedTasks([...checkedTasks, index]);
    }

    const onUncheckTask = (index: number) => {
        setCheckedTasks(checkedTasks.filter((val) => val !== index));
    }
    const getTaskList = () => {
        return (
            <FlatList style={styles.taskListContainer}
                data={taskList}
                renderItem={({ item, index }) =>
                    <TaskCard
                        task={item}
                        index={index}
                        onCheckTask={onCheckTask}
                        onUncheckTask={onUncheckTask} />}
                keyExtractor={item => item.id}
                fadingEdgeLength={100}
            />
        )
    }

    return (
        <View
            style={coreStyles.container}
        >
            <Text style={styles.titleText}>Tasks</Text>
            <View style={styles.buttonContainer}>
                <Button
                    label="New Task"
                    onPress={onCreateClick}
                    Icon={Ionicons}
                    iconName={"add-circle-outline"} />
                <Button
                    label="Completed"
                    onPress={onCompletedClick}
                    Icon={Ionicons}
                    iconName={"checkmark-done-circle-outline"}
                    variant="success" />
            </View>
            {getTaskList()}
            {checkedTasks.length > 0 && <Button
                label="Mark completed"
                size="small"
                Icon={Ionicons}
                iconName="checkmark-circle"
                onPress={onSetCompleted} />}
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        paddingTop: 70,
        fontSize: 30,
        color: '#fff',
        paddingBottom: 20
    },
    taskListContainer: {
        width: "100%"
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    }
})