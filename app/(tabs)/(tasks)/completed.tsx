import Button from "@/components/Button";
import CompletedTask from "@/components/CompletedTask";
import { coreStyles } from "@/constants/styles";
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
            style={coreStyles.container}
        >
            <Text style={coreStyles.titleText}>Completed</Text>
            {getTaskList()}
            <Button
                label="Back to tasks"
                onPress={onBack}
                Icon={Ionicons}
                iconName="chevron-back-circle-outline"
                variant="secondary"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    taskListContainer: {
        width: "100%"
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    }
})