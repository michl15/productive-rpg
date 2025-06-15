import { DARKER_BLUE, GREEN, LIGHT_BLUE, RED, YELLOW } from "@/constants/colors";
import { Task } from "@/constants/types";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CheckBox from "./CheckBox";

type Props = {
    task: Task;
    onCheckTask: (index: number) => void;
    onUncheckTask: (index: number) => void;
    index: number;
}

export default function TaskCard({ task, onCheckTask, onUncheckTask, index }: Props) {
    const [taskDone, setTaskDone] = useState(false);

    const router = useRouter();

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

    const onLongPress = () => {
        router.replace(`/(tabs)/(tasks)/edit/${task.id}`)
    }

    const onPress = () => {
        setTaskDone(!taskDone);
        if (!taskDone) {
            onCheckTask(index);
        } else {
            onUncheckTask(index);
        }
    }

    return (
        <View style={styles.taskCardContainer}>
            <Pressable onPress={onPress} style={styles.taskCardContent} onLongPress={onLongPress}>
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
        backgroundColor: DARKER_BLUE
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
        fontWeight: 700
    }
})