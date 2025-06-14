import Button from "@/components/Button";
import TaskCard from "@/components/TaskCard";
import { BACKGROUND_GRAY } from "@/constants/colors";
import { Task } from "@/constants/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Tasks() {
    const router = useRouter()
    const onCreateClick = () => {
        console.log("create task")
        router.push("/create")
    }

    const getTaskList = async () => {
        let tasks: Task[] = []
        const taskList = await AsyncStorage.getItem("tasks");
        if (taskList) {
            tasks = JSON.parse(taskList)
        }
        tasks.sort((a, b) => b.priority - a.priority);

        return (
            <View style={styles.taskListContainer}>
                {tasks.map((task, index: number) => {
                    return (
                        <TaskCard key={`${task}-${index}`} task={task}>
                        </TaskCard>
                    )
                })}
            </View>
        )
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.titleText}>Tasks</Text>
            {getTaskList()}
            <Button label="Create a new task" onPress={onCreateClick} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_GRAY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30,
        color: '#fff',
        paddingBottom: 20
    },
    basicText: {
        color: '#fff'
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
    taskListContainer: {
        width: "90%"
    }
})