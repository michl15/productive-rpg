import { GREEN, LIGHT_BLUE, RED, YELLOW } from "@/constants/colors";
import { Task } from "@/constants/types";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CheckBox from "./CheckBox";

type Props = {
    task: Task
}

export default function TaskCard({ task }: Props) {
    const [taskDone, setTaskDone] = useState(false);

    const badgeColor = () => {
        if (task.priority === 0) {
            return GREEN;
        } else if (task.priority === 1) {
            return YELLOW;
        } else {
            return RED;
        }
    }

    const badgeContent = () => {
        if (task.priority === 0) {
            return "Low";
        } else if (task.priority === 1) {
            return "Med";
        } else {
            return "High";
        }
    }

    return (
        <View style={styles.taskCardContainer}>
            <Pressable onPress={() => { setTaskDone(!taskDone) }} style={styles.taskCardContent}>
                <CheckBox value={taskDone} onCheck={() => { setTaskDone(true) }} />
                <Text style={styles.taskCardText}>{task.name}</Text>
                <Text style={{
                    ...styles.taskBadge,
                    backgroundColor: `${badgeColor()}`
                }}>{badgeContent()}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    taskCardContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: LIGHT_BLUE,
        margin: 5,
        borderRadius: 10,
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
        padding: 5
    }
})