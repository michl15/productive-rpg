import { DARKER_GREEN, GREEN } from "@/constants/colors";
import { Task } from "@/constants/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    task: Task;
}

export default function CompletedTask({ task }: Props) {
    return (
        <View style={styles.taskCardContainer}>
            <Pressable style={styles.taskCardContent}>
                <Ionicons name="checkmark-circle" color={GREEN} size={20} />
                <Text style={styles.taskCardText}>{task.name}</Text>
                <Text style={styles.taskBadge}>
                    +5 XP
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    taskCardContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: GREEN,
        margin: 5,
        borderRadius: 10,
        backgroundColor: DARKER_GREEN
    },
    taskCardText: {
        marginLeft: 10,
        color: "#fff",
        fontSize: 16
    },
    taskCardContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    taskBadge: {
        marginLeft: "auto",
        fontSize: 14,
        borderRadius: 10,
        padding: 5,
        color: DARKER_GREEN,
        backgroundColor: GREEN,
        fontWeight: 700
    }
})