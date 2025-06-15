import Button from "@/components/Button";
import CompletedTask from "@/components/CompletedTask";
import { BACKGROUND_GRAY } from "@/constants/colors";
import { RootState } from "@/redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Completed() {
    const router = useRouter();
    const { completed } = useSelector((state: RootState) => state.tasksReducer);

    const onBack = () => {
        router.back();
    }

    const getTaskList = () => {
        return (
            <FlatList style={styles.taskListContainer}
                data={completed}
                renderItem={({ item }) => <CompletedTask task={item} />}
                keyExtractor={item => item.id}
                fadingEdgeLength={100}
            />
        )
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.titleText}>Completed</Text>
            {getTaskList()}
            <Button
                label="Back to tasks"
                onPress={onBack}
                Icon={Ionicons}
                iconName="chevron-back-circle-outline"
            />
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
        justifyContent: "center"
    }
})