import Button from "@/components/Button";
import TaskCard from "@/components/TaskCard";
import { BACKGROUND_GRAY } from "@/constants/colors";
import { RootState } from "@/redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Tasks() {
    const router = useRouter()
    const { taskList } = useSelector((state: RootState) => state.tasksReducer)

    const onCreateClick = () => {
        router.push("/(tabs)/(tasks)/create")
    }

    const onCompletedClick = () => { }

    const getTaskList = async () => {
        return (
            <FlatList style={styles.taskListContainer}
                data={taskList}
                renderItem={({ item }) => <TaskCard task={item} />}
                keyExtractor={item => item.id}
                fadingEdgeLength={100}
            />
        )
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.titleText}>Tasks</Text>
            <Button label="New Task" onPress={onCreateClick} Icon={Ionicons} iconName={"add-circle-outline"} />
            {getTaskList()}
            <Button label="Completed" onPress={onCompletedClick} Icon={Ionicons} iconName={"checkmark-circle-outline"} />
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
        justifyContent: "space-between"
    }
})